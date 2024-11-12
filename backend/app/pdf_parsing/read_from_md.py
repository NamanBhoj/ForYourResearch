import os


def process_md_files(md_folder):
    results = []

    for filename in os.listdir(md_folder):
        if filename.endswith(".md"):
            file_path = os.path.join(md_folder, filename)

            # Read content of the Markdown file
            with open(file_path, "r") as md_file:
                content = md_file.read()
                results.append({"title": filename, "full_text": content})

    return results


# Folder path and question to query on each Markdown file
# md_folder = "/Users/rajamuhammedomar/latest-fyr/ForYourResearch/backend/app/pdf_parsing/split_mds"
# # question = "Summarize the key points of this document."

# # Run the function
# results = process_md_files(md_folder)

# Optionally, you can save or further process `results`
