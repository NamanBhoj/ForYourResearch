import fitz  # PyMuPDF

# READ IN PDF
doc = fitz.open(
    '/Users/rajamuhammedomar/latest-fyr/ForYourResearch/backend/app/pdf_parsing/merged_pdfs/2eYbiBc5shN2ynLx857epU9BOH13/"augmented reality"/2eYbiBc5shN2ynLx857epU9BOH13 - "augmented reality".pdf'
)

for page in doc:
    # SEARCH
    text = "Display devices have become ubiquitous"
    text_instances = page.search_for(text)

    # HIGHLIGHT AND ADD COMMENT
    for inst in text_instances:
        highlight = page.add_highlight_annot(inst)  # Add highlight annotation
        highlight.set_info(
            info={
                "title": "Note",
                "content": "This is a key point related to display devices.",
            }
        )
        highlight.update()  # Update the annotation to save changes

# OUTPUT
doc.save("output.pdf", garbage=4, deflate=True, clean=True)
