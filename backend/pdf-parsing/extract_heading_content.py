from docx import Document


def extract_headings_with_content(docx_path):
    doc = Document(docx_path)
    headings_with_content = {}
    current_heading = None

    for paragraph in doc.paragraphs:
        if paragraph.style.name.startswith("Heading"):
            current_heading = paragraph.text
            headings_with_content[current_heading] = []
        elif current_heading:
            headings_with_content[current_heading].append(paragraph.text)

    return headings_with_content


def save_to_markdown(headings_with_content, markdown_path):
    with open(markdown_path, "w") as md_file:
        for heading, content in headings_with_content.items():
            md_file.write(f"## {heading}\n\n")
            for line in content:
                md_file.write(f"{line}\n\n")
            md_file.write("\n---\n\n")  # Separator between sections


# Replace 'your_document.docx' with the path to your .docx file
docx_path = "./output/output_pdf_5.docx"
markdown_path = "./output/extracted_content.md"

headings_with_content = extract_headings_with_content(docx_path)
save_to_markdown(headings_with_content, markdown_path)

print(f"Content saved to {markdown_path}")
"..indep-endant variables..."