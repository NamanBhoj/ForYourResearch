import os
import requests
import json
import certifi

# Open and read the JSON file
with open("papers.json", "r") as file:
    data = json.load(file)
    # print(data)

def download_pdf_file(papers: list) -> bool:
    """Download PDF from given URL to local directory.

    :param papers: List of papers with URLs to be downloaded
    :return: True if PDF file was successfully downloaded, otherwise False.
    """
    res = []
    # Request URL and get response object
    for paper in papers:
        print(paper)
        try:
            if paper.get("openAccessPdf"):
                response = requests.get(
                    paper["openAccessPdf"]["url"], verify=certifi.where()
                )

                # isolate PDF filename from URL
                pdf_file_name = os.path.basename(paper["openAccessPdf"]["url"])
                if response.status_code == 200:
                    # Save in current working directory
                    filepath = os.path.join(os.getcwd(), f"pdfs/{pdf_file_name}")
                    with open(filepath, "wb") as pdf_object:
                        pdf_object.write(response.content)
                        print(f"{pdf_file_name} was successfully saved!")
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
    # URL from which pdfs to be downloaded
    download_pdf_file(data)
