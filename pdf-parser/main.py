import os
import requests
import json
import certifi
import boto3

# Set AWS credentials as environment variables (optional if using aws configure)
os.environ['AWS_ACCESS_KEY_ID'] = 'AKIASFUIRGOEJEK464CL'
os.environ['AWS_SECRET_ACCESS_KEY'] = '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'
os.environ['AWS_DEFAULT_REGION'] = 'us-east-2'

# Bucket name
bucket_name = "paper-full-texts"

# User UID folder
s3_folder = 'some-user/'

# Search string folder
search_string = 'epidemic/'

s3 = boto3.client('s3')

# Open and read the JSON file
with open("papers.json", "r") as file:
    data = json.load(file)

def download_pdf_file(papers: list) -> bool:
    res = []
    # Connection Pooling so that the same connection can be used for multiple requests making it a bit faster
    session = requests.Session()
    session.verify = certifi.where()  # Use certifi for certificate verification

    # Request URL and get response object
    for paper in papers:
        print(paper)
        try:
            if paper.get("openAccessPdf"):
                response = session.get(paper["openAccessPdf"]["url"], stream=True)

                # Isolate PDF filename from URL
                pdf_file_name = os.path.basename(paper["openAccessPdf"]["url"])
                if response.status_code == 200:
                    # Upload directly to S3
                    print(f"Uploading {pdf_file_name} to S3...")
                    s3.upload_fileobj(response.raw, bucket_name, f"{s3_folder}{search_string}{pdf_file_name}.pdf")
                    print(f"{pdf_file_name} was successfully uploaded to S3!")
                    res.append("yes")
                else:
                    res.append("no open access")
                    print(f"Uh oh! Could not download {pdf_file_name},")
                    print(f"HTTP response status code: {response.status_code}")
            else:
                res.append("no url")
        except Exception as e:
            print(f"Failed to download {paper}: {e}")
            res.append("no - other errors")
    with open("array.json", "w") as f:
        json.dump(res, f)

if __name__ == "__main__":
    # URL from which PDFs to be downloaded
    download_pdf_file(data)
