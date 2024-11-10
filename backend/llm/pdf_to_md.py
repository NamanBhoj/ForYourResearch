import pymupdf4llm


def pdf_to_markdown(output_md_path):
    md_text = pymupdf4llm.to_markdown("woops.pdf")

    with open(output_md_path, "w") as md_file:
        md_file.write(md_text)

    print(f"Markdown content has been written to '{output_md_path}'")


# Example usage
if __name__ == "__main__":
    output_md = "output_markdown.md"
    pdf_to_markdown(output_md)
