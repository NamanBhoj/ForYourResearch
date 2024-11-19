# import openai
# from typing import List, Dict

# openai.api_key = "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"

# prompt = '''
# You are a scientific Assistant responsible for determining if the provided document fully answers the given query, treating the document as evidence. If the document evidently answers the question, output "Yes". If not, output "No".
# Query: {query}
# Document: """{document}"""
# Answer:
# '''


# def document_relevance(
#     queries: List[str], documents: List[Dict[str, str]]
# ) -> List[Dict[str, List[str]]]:
#     result = []

#     # A dictionary to collect documents and their relevant research questions
#     doc_relevance = {}

#     # Loop through all queries
#     for query in queries:
#         # Loop through all documents
#         for doc in documents:
#             title = doc.get("title", "")
#             title = title.replace(".md", "")

#             full_text = doc.get("full_text", "")

#             # Check if the document answers the current query
#             response = openai.completions.create(
#                 model="gpt-4o-mini",
#                 prompt=prompt.format(query=query, document=full_text),
#                 temperature=0,
#                 max_tokens=50,
#             )
#             answer = response.choices[0].text.strip()

#             if answer == "Yes":
#                 # If the document answers the query, add the query to the document's list
#                 if title not in doc_relevance:
#                     doc_relevance[title] = []
#                 doc_relevance[title].append(query)

#     # Convert the collected document relevance dictionary to a list of dictionaries
#     for title, questions in doc_relevance.items():
#         result.append({title: questions})

#     return result

import openai
from pydantic import BaseModel
from typing import List, Dict

openai.api_key = "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"

prompt = '''
You are a scientific Assistant responsible for determining if the provided document fully answers the given query, treating the document as evidence. If the document evidently answers the question, output "Yes". If not, output "No".
Query: {query}
Document: """{document}"""
Answer:
'''


def document_relevance(
    queries: List[str], documents: List[Dict[str, str]]
) -> List[Dict[str, List[str]]]:
    result = []
    for query in queries:
        relevant_documents = []
        for doc in documents:
            title = doc.get("title", "")
            full_text = doc.get("full_text", "")
            response = openai.beta.chat.completions.parse(
                model="gpt-4o-mini",
                messages=[
                    {
                        "role": "system",
                        "content": "You are an Assistant responsible for answering questions based strictly on the provided text. If the text contains an answer in context of the question, respond with 'Yes'. If the text does not answer the question, respond with 'No'.",
                    },
                    {
                        "role": "user",
                        "content": prompt.format(query=query, document=full_text),
                    },
                ],
                temperature=0,
            )
            answer = response.choices[0].message.content.strip()
            if answer == "Yes":
                relevant_documents.append(title)

        result.append({query: relevant_documents})
    return result


def filter_relevant_abstracts(search_query, abstracts):
    # Initialize an empty list to store relevant abstracts
    relevant_abstracts = []

    for abstract in abstracts:
        # Call OpenAI API to check if the search query is relevant to the abstract
        try:
            # Get the completion response with relevance check
            response = (
                openai.beta.chat.completions.parse(
                    model="gpt-4o-mini",
                    temperature=0,
                    messages=[
                        {
                            "role": "system",
                            "content": "You are an assistant that checks if a search query is relevant to an abstract.",
                        },
                        {
                            "role": "user",
                            "content": f"Does the abstract: '{abstract}' contain contextual information about the abstract: {abstract}? Respond with either 'yes' if it does, or 'no' if it does not. Respond with 'yes' if you are not sure.",
                        },
                    ],
                ),
            )
            # Parse the output to determine relevance
            # answer = response.choices[0].message.content.strip().lower()
            # print(answer)
            response_object = response[0]

            # Now access the message content
            answer = response_object.choices[0].message.content.strip()
            # Add to relevant abstracts if the answer is 'yes'
            if answer == "yes":
                relevant_abstracts.append(abstract)

        except Exception as e:
            print(f"Error processing abstract: {e}")

    return relevant_abstracts
