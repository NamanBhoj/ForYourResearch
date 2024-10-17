import os
import boto3
import certifi
import requests
import pymupdf4llm
import tempfile
import openai

# Set AWS credentials as environment variables (optional if using aws configure)

os.environ["AWS_ACCESS_KEY_ID"] = "AKIASFUIRGOEJEK464CL"
os.environ["AWS_SECRET_ACCESS_KEY"] = "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"
os.environ["AWS_DEFAULT_REGION"] = "us-east-2"


def upload_papers_to_s3(uid: str, search_query: str, papers: list):

    # Bucket name
    bucket_name = "paper-full-texts"

    # User UID folder
    user_folder = f"{uid}/"  # Ensure folder path ends with a slash

    # Search string folder
    query_folder = f"{search_query}/"  # Ensure folder path ends with a slash

    s3 = boto3.client("s3")

    res = []
    # Connection Pooling for multiple requests
    session = requests.Session()
    session.verify = certifi.where()  # Use certifi for certificate verification

    for paper in papers:
        try:
            if paper.get("openAccessPdf") and paper["openAccessPdf"]["url"] is not None:
                response = session.get(
                    paper["openAccessPdf"]["url"], stream=True, timeout=10
                )

                # Set the name of the pdf to paper's title
                pdf_file_name = paper["title"] + ".pdf"

                if response.status_code == 200:
                    # Upload directly to S3 with folder structure
                    print(f"Uploading {pdf_file_name} to S3...")
                    s3.upload_fileobj(
                        response.raw,
                        bucket_name,
                        f"{user_folder}{query_folder}{pdf_file_name}",
                    )
                    print(f"{pdf_file_name} was successfully uploaded to S3!")
                    res.append("yes")
                else:
                    res.append("no open access")
        except requests.exceptions.RequestException as e:
            print(f"Request failed: {e}")
        except Exception as e:
            print(f"An error occurred: {e}")


# # Test for function: upload_papers_to_s3
# with open("papers.json", "r") as file:
#     papers = json.load(file)

# upload_papers_to_s3("123456", "cross reality", papers)
#


def read_pdfs_from_s3(uid: str, search_query: str):
    bucket_name = "paper-full-texts"
    s3 = boto3.client("s3")
    s3_prefix = f"{uid}/{search_query}/"
    response = s3.list_objects_v2(Bucket=bucket_name, Prefix=s3_prefix)
    if "Contents" not in response:
        print("No PDFs found for the given uid and search_query.")
        return
    pdf_markdowns = []
    for item in response["Contents"]:
        pdf_file_key = item["Key"]
        with tempfile.NamedTemporaryFile(delete=False) as temp_pdf_file:
            s3.download_fileobj(bucket_name, pdf_file_key, temp_pdf_file)
            temp_pdf_file_path = temp_pdf_file.name
            md_text = pymupdf4llm.to_markdown(temp_pdf_file_path)
            pdf_markdowns.append(
                {
                    "filename": pdf_file_key.split("/")[-1].replace(".pdf", ""),
                    "markdown": md_text,
                }
            )
            os.remove(temp_pdf_file_path)
            print(f"Deleted temporary file {temp_pdf_file_path}")
            # break
    return pdf_markdowns


# Usage
# pdfs = read_pdfs_from_s3("123456", "cross reality")
# with open("data.json", "w") as f:
#     json.dump(pdfs, f)
# Usage
# read_pdfs_from_s3("123456", "cross reality")


def screen_for_research_questions(research_questions, pdf_markdowns):
    prompt_template = """
    Determine if the following document is relevant to the given research question.
    Research Question: "{query}"
    Document: "{document}"
    Reply with 'Yes' if it is relevant and 'No' if it is not.
    """

    # Replace this with your actual OpenAI API key
    openai.api_key = "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"

    results = []

    # Loop through each research question
    for question in research_questions:
        relevant_papers = []

        # Loop through each paper's markdown content
        for paper in pdf_markdowns:
            # Construct the prompt for OpenAI
            prompt = prompt_template.format(query=question, document=paper["markdown"])

            try:
                # Make the OpenAI API call to assess relevance
                response = openai.chat.completions.create(
                    model="gpt-4-1106-preview",
                    messages=[
                        {
                            "role": "system",
                            "content": "You are an Assistant responsible for detecting whether the document answers the research question. Output 'Yes' if the document answers it and 'No' if it does not.",
                        },
                        {"role": "user", "content": prompt},
                    ],
                    temperature=0,
                    logprobs=True,
                    logit_bias={
                        3363: 1,
                        1400: 1,
                    },
                )
                print(response.choices[0].message.content)
                # Extract the model's decision ('Yes' or 'No')
                decision = response.choices[0].message.content.lower()

                if decision == "yes":
                    # If relevant, add the paper filename to the list for this question
                    relevant_papers.append(paper["title"])

            except Exception as e:
                print(f"Error while processing document {paper['title']}: {e}")

        # Add the result for the current research question if any relevant papers were found
        if relevant_papers:
            results.append({question: relevant_papers})

    return results


# Example usage
research_questions = [
    "What is the best technique for review?",
    "What is the worst technique for reading?",
]

pdf_markdowns = [
    {"filename": "A Scoping survey", "markdown": "Full text of scoping survey..."},
    {"filename": "A Systematic review", "markdown": "Detailed systematic review..."},
    {
        "filename": "Virtual reality",
        "markdown": "Virtual reality in reading studies...",
    },
    {"filename": "A Meta-analysis", "markdown": "Meta-analysis techniques..."},
    {"filename": "A blah", "markdown": "The worst technique for reading is fuck..."},
    {"filename": "A bloop", "markdown": "bitch is the worst technique for reading..."},
]

# response = screen_for_research_questions(research_questions, pdf_markdowns)
# print(response)


def download_pdfs_and_convert_to_markdown(pdfs_list: list) -> list:
    """
    Downloads PDFs from a list of URLs and converts them to Markdown.

    Args:
        pdfs_list (list): A list of dictionaries containing 'title' and 'link'.

    Returns:
        list: A list of dictionaries with 'title' and 'markdown' for each PDF.
    """
    markdowns = []

    for pdf in pdfs_list:
        pdf_url = pdf.get("link")
        pdf_title = pdf.get("title")

        if not pdf_url:
            print(f"No URL provided for title: {pdf_title}. Skipping...")
            markdowns.append({"title": pdf_title, "markdown": ""})
            continue

        # Create a temporary file for the PDF
        with tempfile.NamedTemporaryFile(delete=True, suffix=".pdf") as temp_pdf_file:
            try:
                print(f"Downloading PDF '{pdf_title}' from: {pdf_url}")
                response = requests.get(pdf_url, stream=True)
                response.raise_for_status()  # Raise an error for bad responses

                # Write the PDF content to the temporary file
                temp_pdf_file.write(response.content)
                temp_pdf_file.flush()  # Ensure the file is written before reading

                # Convert the PDF to Markdown
                print(f"Converting PDF '{pdf_title}' to Markdown...")
                md_text = pymupdf4llm.to_markdown(temp_pdf_file.name)
                markdowns.append({"title": pdf_title, "markdown": md_text})

            except Exception as e:
                print(f"Error downloading PDF '{pdf_title}': {e}")
                markdowns.append(
                    {"title": pdf_title, "markdown": ""}
                )  # Append an empty string for failed downloads
            except Exception as e:
                print(f"Error converting PDF '{pdf_title}' to Markdown: {e}")
                markdowns.append(
                    {"title": pdf_title, "markdown": ""}
                )  # Append an empty string for conversion errors

    return markdowns
