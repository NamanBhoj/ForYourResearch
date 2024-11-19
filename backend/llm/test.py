import openai
from pydantic import BaseModel
from typing import List, Dict, Any
import re


openai.api_key = "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"


def chunk_document(document, max_chunk_size):
    """
    Splits the document into chunks of size less than or equal to max_chunk_size tokens.
    """
    words = document.split()
    chunks = []
    current_chunk = []
    current_size = 0
    chunk_id = 1

    for word in words:
        current_size += len(word) + 1  # Approximate size in characters
        if current_size > max_chunk_size:
            chunks.append((chunk_id, " ".join(current_chunk)))
            current_chunk = [word]
            current_size = len(word) + 1
            chunk_id += 1
        else:
            current_chunk.append(word)

    if current_chunk:
        chunks.append((chunk_id, " ".join(current_chunk)))

    return chunks


import re


class CitationsResponse(BaseModel):
    citations: list[str]


def screen_individual_paper(queries, title, document, max_chunk_size=20000):
    """
    Queries the LLM with the document split into chunks and retrieves exact cited text.
    """
    res = {title: {}}
    chunks = chunk_document(document, max_chunk_size)

    # Iterate over each query
    for query in queries:
        highlighted_text = []  # Clear the list for each query
        print(f"Processing query: {query}")

        # Process each chunk of the document
        for chunk_id, chunk in chunks:
            print(f"Processing chunk {chunk_id}/{len(chunks)}...")
            response = openai.beta.chat.completions.parse(
                model="gpt-4o-mini",
                messages=[
                    {
                        "role": "system",
                        #                         "content": """You are an Assistant responsible for quoting exact full sentence until fullstop of the answer from the document which only answers the exact question.
                        # Provide only the quoted text that answers the question, cited with the chunk ID (e.g., 'Chunk 1').
                        # If no answer is found, respond with 'No answer found in Chunk X.'""",
                        "content": """You will be provided with a document delimited by triple quotes and a question. Your task is to answer the question using only the provided document and matching word to word to cite the passage(s) of the document used to answer the question, do not add additional content by yourself. If the document does not contain the information needed to answer this question then simply write: "No answer found". If an answer to the question is provided, it must be annotated with a citation. Use the following format for to cite relevant passages ({"citation": …}).""",
                    },
                    {
                        "role": "user",
                        "content": f"Document: '''{chunk}'''\nQuestion: {query}",
                        # "content": f"Extract text that answers: '{query}' based on Chunk {chunk_id}: {chunk}",
                    },
                ],
                max_completion_tokens=1000,
                temperature=0,
                response_format=CitationsResponse,
            )

            answer = response.choices[0].message.parsed.citations

            print(answer)

            if "No answer found" not in answer:
                for ans in answer:
                    highlighted_text.append(ans)

        # If no answer was found, append "No answer found."
        if not highlighted_text:
            highlighted_text.append("No answer found.")

        # Store the answers for this query under the paper title
        res[title][query] = highlighted_text

        # Print out the results for the current query
        if highlighted_text:
            print((highlighted_text))
        else:
            print("No relevant text found for this query.")

    return res

    # def test2(query, document):
    response = openai.beta.chat.completions.parse(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": """You are an Assistant responsible for answering questions based strictly on the provided text.
                            If the text contains an answer in context of the question, respond with 'Yes' followed by first fullstop of all
                            text segments that answer the question as an array, enclosed in quotation marks. If the text does not answer
                            the question, respond with 'No answer found.'""",
            },
            {"role": "user", "content": f"{query} based on: {document}"},
        ],
        max_completion_tokens=16384,
        temperature=0,
    )

    # Get the content directly from the response
    answer = response.choices[0].message.content.strip()
    print(answer)


# Reading the document
# with open(
#     "/Users/rajamuhammedomar/latest-fyr/ForYourResearch/backend/app/pdf_parsing/naman/LSTM_Powered_Identification_of_Clickbait_Content_on_Entertainment_and_News_Websites.md",
#     "r",
# ) as file:
#     document = file.read()

# query = "Which model has the lowest accuracy and what is the value?"
# # test2(query, document)
# test(query=query, document=document)


def screen_papers(
    research_questions: List[str],
    papers: List[str],
    max_chunk_size=10000,
) -> List[Dict[str, Any]]:
    """
    Loops over papers and calls the `test` function on them. Returns an array of objects where each object contains the title of the paper
    and the response of the `test` function for that paper.

    Args:
        paper_titles (List[str]): Titles of the papers.
        research_questions (List[str]): Research questions to query the papers.
        papers (List[str]): Full content of the papers.
        max_chunk_size (int): Maximum size of the chunks for each paper (default 4000 tokens).

    Returns:
        List[Dict[str, Any]]: List of objects containing paper titles and `test` function responses.
    """
    results = []

    for paper in papers:  # Unpack directly
        results.append(
            screen_individual_paper(
                queries=research_questions,
                title=paper["title"].replace(".html", ""),  # Directly use the title
                document=paper[
                    "full_text"
                ],  # Directly use the paper content as a string
                max_chunk_size=max_chunk_size,
            )
        )

    return results


import os


def read_md_files(directory_path):
    """
    Reads all .md files from a specified directory and stores their content in an array.

    Args:
        directory_path (str): Path to the directory containing .md files.

    Returns:
        List[str]: A list where each element is the content of an .md file.
    """
    md_contents = []

    # Iterate over files in the directory
    for filename in os.listdir(directory_path):
        # Check if the file has an .md extension
        if filename.endswith(".md"):
            file_path = os.path.join(directory_path, filename)
            try:
                # Open and read the file
                with open(file_path, "r", encoding="utf-8") as file:
                    md_contents.append(file.read())
            except Exception as e:
                print(f"Error reading file {file_path}: {e}")

    return md_contents


# paper_titles = ["t1", "t2", "t3"]
# research_questions = [
#     "What potential future work can be done in this field?",
#     "How many papers were surveyed for the literature review?"
# ]
# paper = read_md_files(
#     '/Users/rajamuhammedomar/latest-fyr/ForYourResearch/backend/app/pdf_parsing/split_mds/2eYbiBc5shN2ynLx857epU9BOH13/"cross reality"'
# )[0]

# print(screen_individual_paper(research_questions, "lorem ipsum", paper))
