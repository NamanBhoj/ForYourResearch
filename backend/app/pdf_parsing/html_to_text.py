from bs4 import BeautifulSoup
# from langchain_experimental.text_splitter import SemanticChunker
# from langchain_openai.embeddings import OpenAIEmbeddings
import os


def process_html_files(html_folder, paper_titles):
    # Ensure the folder exists; create it if it doesn't
    os.makedirs(html_folder, exist_ok=True)

    results = []

    for filename in os.listdir(html_folder):
        if filename.endswith(".html"):
            file_path = os.path.join(html_folder, filename)

            # Read content of the html file
            with open(file_path, "r") as html_file:
                content = html_file.read()
                results.append(
                    {"title": filename, "full_text": convert_html_to_txt(content)}
                )

    return results


def convert_html_to_txt(html):
    # Replace 'path_to_file.html' with the actual path to your HTML file
    # file_path = "/Users/rajamuhammedomar/latest-fyr/ForYourResearch/backend/app/pdf_parsing/html_files/An Overview of Augmented Reality.html"

    # # Replace 'output.txt' with the desired path for the output file
    # output_path = "output.txt"

    # # Read the HTML content from the file
    # with open(file_path, "r", encoding="utf-8") as file:
    #     html = file.read()

    soup = BeautifulSoup(html, features="html.parser")

    # Remove all script and style elements
    for script in soup(["script", "style"]):
        script.extract()  # Rip it out

    # Extract text
    text = soup.get_text()

    # Break into lines and remove leading and trailing spaces
    lines = (line.strip() for line in text.splitlines())
    # Break multi-headlines into a line each
    chunks = (phrase.strip() for line in lines for phrase in line.split("  "))
    # Drop blank lines
    text = "\n".join(chunk for chunk in chunks if chunk)
    return text
    # Save the text to a file
    # with open(output_path, "w", encoding="utf-8") as output_file:
    #     output_file.write(text)

    # print(f"Extracted text saved to {output_path}")


# convert_html_to_txt()

# def split_doc():
#     with open("output.txt", "r") as file:
#         text = file.read()
#     text_splitter = SemanticChunker(
#         OpenAIEmbeddings(
#             api_key="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"
#         )
#     )
#     docs = text_splitter.create_documents([text])
#     print(docs[0].page_content)


# split_doc()
