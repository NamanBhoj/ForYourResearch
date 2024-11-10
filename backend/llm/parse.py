from llama_parse import LlamaParse  # pip install llama-parse

parser = LlamaParse(
    api_key="llx-2GEl0IgxTMDBqUB9zZyL3ZzUPQMvKXRQobf37dQRKda3WORr",  # Replace with your actual API key
    result_type="markdown",  # "markdown" and "text" are available
)

documents = parser.load_data("./woops.pdf")
# parser = LlamaParse(
#     api_key="llx-2GEl0IgxTMDBqUB9zZyL3ZzUPQMvKXRQobf37dQRKda3WORr",  # Replace with your actual API key
#     result_type="markdown",  # Choose "markdown" or "text"
# )

# # Load and parse the PDF document
# documents = parser.load_data("./Advanced_liquid_crystal_devices_for_augmented_real.pdf")

# Save the parsed markdown content to a file
output_file = "parsed_markdown_output.md"
# with open(output_file, "w") as file:
#     file.write(
#         documents[0].get("content", "")
#     )  # Access the content of the first document

# Print documents to understand its structure
print(documents)

output_file = "parsed_markdown_output.md"

# Open the file in append mode to write each page's content
with open(output_file, "w") as file:  # 'w' mode to start fresh, overwrites if exists
    for i, document in enumerate(documents):
        # Append page title and content
        # file.write(f"\n\n# Page {i + 1}\n\n")  # Optional: Add page header
        file.write(document.text)  # Write the text content of the current page

print(f"All pages have been appended to '{output_file}'")
