import os
from PyPDF2 import PdfMerger, PdfReader
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter


def create_header_page(text, output_path):
    try:
        c = canvas.Canvas(output_path, pagesize=letter)
        c.drawString(100, 750, text)
        c.save()
    except Exception as e:
        print(f"Error creating header page: {e}")


def merge_pdfs_with_headers(folder_path, output_path, uid, search_query):
    # Ensure the output directory exists by creating it if necessary
    os.makedirs(output_path, exist_ok=True)

    merger = PdfMerger()
    pdf_counter = 1
    paper_titles = []

    for item in os.listdir(folder_path):
        if item.endswith(".pdf"):
            try:
                # Create a unique header page for each PDF
                header_path = os.path.join(folder_path, f"header_{pdf_counter}.pdf")
                create_header_page(
                    f"Start of PDF Naman_Omar {pdf_counter}", header_path
                )
                print(f"Adding header: {header_path}")
                merger.append(header_path)

                # Add the actual PDF
                pdf_path = os.path.join(folder_path, item)
                print(f"Adding PDF: {pdf_path}")
                merger.append(pdf_path)

                pdf_counter += 1
                paper_titles.append(item)
            except Exception as e:
                print(f"Error processing {item}: {e}")

    # Define the final output PDF path
    final_output_path = os.path.join(output_path, f"{uid} - {search_query}.pdf")
    try:
        merger.write(final_output_path)
        merger.close()
        return paper_titles
        print(f"Merged PDF with headers saved to {final_output_path}")
    except Exception as e:
        print(f"Error writing merged PDF: {e}")


# if __name__ == "__main__":
#     folder_path = "/Users/justn/Downloads/all_pdfs"
#     output_path = "/Users/justn/Downloads/merged_pdfs/merged_with_headers.pdf"  # Ensure this is a file, not a directory

#     merge_pdfs_with_headers(folder_path, output_path)
