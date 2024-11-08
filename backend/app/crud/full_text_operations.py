import os
import boto3
import certifi
import requests
import io
import tempfile
from ..pdf_parsing import (
    merge_pdfs,
    convert_pdf_to_docx,
    split_merged_docx,
    extract_heading_content,
    read_from_md,
)
from ...llm.temp_full_text_reranking import document_relevance

# Set AWS credentials as environment variables (optional if using aws configure)

os.environ["AWS_ACCESS_KEY_ID"] = "AKIASFUIRGOEJEK464CL"
os.environ["AWS_SECRET_ACCESS_KEY"] = "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"
os.environ["AWS_DEFAULT_REGION"] = "us-east-2"


def upload_papers_to_s3(uid: str, search_query: str, papers: list):

    # Bucket name
    bucket_name = "paper-full-texts"

    # User UID folder
    s3_folder = f"{uid}/"  # Ensure folder path ends with a slash

    # Search string folder
    search_string = f"{search_query}/"  # Ensure folder path ends with a slash

    s3 = boto3.client("s3")

    res = []
    # Connection Pooling so that the same connection can be used for multiple requests making it a bit faster
    session = requests.Session()
    session.verify = certifi.where()  # Use certifi for certificate verification
    for paper in papers:
        try:
            if paper.get("openAccessPdf"):
                response = session.get(paper["openAccessPdf"]["url"], stream=True)

                # Set the name of the pdf to paper's title
                pdf_file_name = paper["title"] + ".pdf"

                if response.status_code == 200:
                    # Upload directly to S3 with folder structure
                    print(f"Uploading {pdf_file_name} to S3...")
                    s3.upload_fileobj(
                        response.raw,
                        bucket_name,
                        f"{s3_folder}{search_string}{pdf_file_name}",
                    )
                    print(f"{pdf_file_name} was successfully uploaded to S3!")
                    res.append("yes")
                else:
                    res.append("no open access")
        except:
            continue


# # Test for function: upload_papers_to_s3
# with open("papers.json", "r") as file:
#     papers = json.load(file)

# upload_papers_to_s3("123456", "cross reality", papers)
#


# def read_pdfs_from_s3(uid: str, search_query: str):
#     # Bucket name
#     bucket_name = "paper-full-texts"

#     s3 = boto3.client("s3")

#     # Construct the S3 prefix for the uid and search query
#     s3_prefix = f"{uid}/{search_query}/"

#     # List objects under the specified prefix
#     response = s3.list_objects_v2(Bucket=bucket_name, Prefix=s3_prefix)

#     if "Contents" not in response:
#         print("No PDFs found for the given uid and search_query.")
#         return

#     for item in response["Contents"]:
#         pdf_file_key = item["Key"]

#         # Create a temporary file to hold the PDF data
#         with tempfile.NamedTemporaryFile(delete=False) as temp_pdf_file:
#             # Download the PDF file directly to the temporary file
#             s3.download_fileobj(bucket_name, pdf_file_key, temp_pdf_file)

#             # Access the temporary file path
#             temp_pdf_file_path = temp_pdf_file.name

#         # Convert to Markdown using pymupdf4llm
#         md_text = pymupdf4llm.to_markdown(temp_pdf_file_path)

#         # Output markdown to console or save it if needed
#         output_md_path = f"{pdf_file_key.split('/')[-1]}.md"
#         with open(output_md_path, "wb") as md_file:
#             md_file.write(md_text.encode())


#         print(
#             f"Converted {pdf_file_key.split('/')[-1]} to Markdown and saved as {output_md_path}"
#         )
#         os.remove(temp_pdf_file_path)
#         print(f"Deleted temporary file {temp_pdf_file_path}")
def read_pdfs_from_s3(uid: str, search_query: str, output_path: str):
    # Bucket name
    bucket_name = "paper-full-texts"
    s3 = boto3.client("s3")
    s3_prefix = f"{uid}/{search_query}/"
    response = s3.list_objects_v2(Bucket=bucket_name, Prefix=s3_prefix)

    if "Contents" not in response:
        print("No PDFs found for the given uid and search_query.")
        return

    # Create a temporary directory to store downloaded PDFs
    with tempfile.TemporaryDirectory() as temp_dir:
        downloaded_files = []

        for item in response["Contents"]:
            pdf_file_key = item["Key"]

            # Download each PDF to the temporary directory
            temp_pdf_path = os.path.join(temp_dir, pdf_file_key.split("/")[-1])
            with open(temp_pdf_path, "wb") as temp_pdf_file:
                s3.download_fileobj(bucket_name, pdf_file_key, temp_pdf_file)

            downloaded_files.append(temp_pdf_path)
            print(f"Downloaded {pdf_file_key} to {temp_pdf_path}")

        # Merge downloaded PDFs with headers
        merge_pdfs.merge_pdfs_with_headers(temp_dir, output_path, uid, search_query)
        print(f"Merged PDF with headers saved to {output_path}")


# Usage
merged_pdf_path = "/Users/rajamuhammedomar/latest-fyr/ForYourResearch/backend/app/pdf_parsing/output/merged.pdf"
docx_path = "/Users/rajamuhammedomar/latest-fyr/ForYourResearch/backend/app/pdf_parsing/downloaded_docxs"
# read_pdfs_from_s3(
#     "123456",
#     "cross reality",
#     merged_pdf_path,
# )

# convert_pdf_to_docx.convert_pdf_to_docx("merged", merged_pdf_path, docx_path)
# split_merged_docx.split_merged_docx_with_formatting(
#     f"{docx_path}/merged.docx",
#     "/Users/rajamuhammedomar/latest-fyr/ForYourResearch/backend/app/pdf_parsing/split_docxs",
# )

# extract_heading_content.convert_folder_docx_to_md(
#     "/Users/rajamuhammedomar/latest-fyr/ForYourResearch/backend/app/pdf_parsing/split_docxs",
#     "/Users/rajamuhammedomar/latest-fyr/ForYourResearch/backend/app/pdf_parsing/split_mds",
# )

# papers = read_from_md.process_md_files(
#     "/Users/rajamuhammedomar/latest-fyr/ForYourResearch/backend/app/pdf_parsing/split_mds"
# )

# questions = [
#     "How does cross reality influence medicine?",
#     "What are the dangers of cross reality?",
#     "What future work recommendations can be made in cross reality?",
# ]

# print(document_relevance(queries=questions, documents=papers))

# Usage
# read_pdfs_from_s3("123456", "cross reality")
