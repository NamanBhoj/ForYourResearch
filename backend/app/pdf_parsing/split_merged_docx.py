import re
from docx import Document
from shutil import copyfile
import os


import os
import re
from docx import Document


def split_merged_docx_with_formatting(input_docx_path, output_dir, paper_titles):
    os.makedirs(output_dir, exist_ok=True)

    # Load the merged DOCX file
    doc = Document(input_docx_path)
    sections = []
    current_section = []

    # Regex pattern to identify the separator text
    pattern = re.compile(r"Start of PDF Naman_Omar (\d+)")

    # Iterate through paragraphs in the document
    for paragraph in doc.paragraphs:
        # Check if the paragraph matches the separator pattern
        match = pattern.match(paragraph.text)

        # When a match is found, start a new section
        if match:
            # Save the current section if it contains paragraphs
            if current_section:
                sections.append(current_section)
                current_section = []

        # Append the paragraph (along with its formatting) to the current section
        current_section.append(paragraph)

    # Append the last section if it exists
    if current_section:
        sections.append(current_section)

    # Ensure the number of titles matches the number of sections
    if len(paper_titles) != len(sections):
        raise ValueError(
            "The number of titles in 'paper_titles' does not match the number of sections in the document."
        )

    # Create individual DOCX files for each section
    for i, (section, title) in enumerate(zip(sections, paper_titles)):
        output_doc = Document()

        for paragraph in section:
            # Add each paragraph with its formatting to the new document
            new_paragraph = output_doc.add_paragraph(paragraph.text)
            new_paragraph.style = paragraph.style  # Retain the paragraph's style

        output_path = f"{output_dir}/{title}.docx"  # Use the title from paper_titles
        output_doc.save(output_path)
        print(f"Created: {output_path}")


# Example usage:
# input_docx_path = "./input.docx"
# output_dir = "./output"
# split_merged_docx_with_formatting(input_docx_path, output_dir)
