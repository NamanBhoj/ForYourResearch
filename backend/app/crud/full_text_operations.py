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
import convertapi

convertapi.api_credentials = "secret_bMbn4IxdtxwgSLwr"

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


def convert_pdf_to_html(pdf_name, pdf_path, html_path):
    # Create the HTML path if it doesn't exist
    os.makedirs(html_path, exist_ok=True)

    # Convert the PDF to HTML and save to the specified path
    convertapi.convert(
        "html", {"File": pdf_path, "Wysiwyg": "false"}, from_format="pdf"
    ).save_files(f"{html_path}/{pdf_name}.html")
    print(f"Converted {pdf_name}.pdf to {pdf_name}.html and saved to {html_path}")


def read_pdfs_from_s3(uid: str, search_query: str, html_output_path: str):
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
        # paper_titles = merge_pdfs.merge_pdfs_with_headers(
        #     temp_dir, output_path, uid, search_query
        # )
        paper_titles = [
            os.path.splitext(os.path.basename(file))[0] for file in downloaded_files
        ]
        print(f"titles exctracted: {paper_titles}")

        # Path for storing HTML conversions
        # html_output_path = "/Users/rajamuhammedomar/latest-fyr/ForYourResearch/backend/app/pdf_parsing/html_files"

        # Convert all downloaded PDFs to HTML
        for pdf_path in downloaded_files:
            pdf_name = os.path.splitext(os.path.basename(pdf_path))[0]
            convert_pdf_to_html(pdf_name, pdf_path, html_output_path)

        print(f"All PDFs converted to HTML and saved to {html_output_path}")
        return paper_titles
