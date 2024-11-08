import convertapi

convertapi.api_credentials = "secret_bMbn4IxdtxwgSLwr"


def convert_pdf_to_docx(pdf_name, pdf_path, docx_path):
    convertapi.convert("docx", {"File": pdf_path}, from_format="pdf").save_files(
        f"{docx_path}/{pdf_name}.docx"
    )


# convert_pdf_to_docx("Raja Muhammed Omar - resume")
