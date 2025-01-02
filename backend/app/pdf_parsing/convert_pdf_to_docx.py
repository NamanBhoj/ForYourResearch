import convertapi
import os

convertapi.api_credentials = "secret_KX72qYpDwkFBPiax"


def convert_pdf_to_docx(pdf_name, pdf_path, docx_path):
    # Create the DOCX path if it doesn't exist
    os.makedirs(docx_path, exist_ok=True)

    convertapi.convert("docx", {"File": pdf_path}, from_format="pdf").save_files(
        f"{docx_path}/{pdf_name}.docx"
    )
    print(f"Converted {pdf_name}.pdf to {pdf_name}.docx and saved to {docx_path}")

