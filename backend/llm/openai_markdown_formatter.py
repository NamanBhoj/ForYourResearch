import openai

# Set your OpenAI API key here
openai.api_key = "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"

# Define the prompt that will be passed to the OpenAI model
prompt = '''
You are an assistant responsible for cleaning up and formatting markdown content. Only output markdown content, nothing else. Do not miss out on any text, output the entire text that is passed in.
Please clean up the following markdown content and ensure that headings, lists, and text are properly structured and readable:

"""{document}"""
'''


# Function to call OpenAI's GPT model for formatting Markdown
def format_markdown(document):
    
    response = openai.chat.completions.create(
        model="gpt-4o-mini",  # You can change this model to gpt-3.5-turbo if needed
        messages=[
            {
                "role": "system",
                "content": "You are an assistant responsible for cleaning and formatting markdown. Make sure to format it properly with appropriate headings, bullet points, and correct text alignment.",
            },
            {"role": "user", "content": prompt.format(document=document)},
        ],
        temperature=0,  # Set temperature for creativity
        max_tokens=16384,  # Set the token limit, adjust based on document size
        logprobs=True,
    )

    # Extract the formatted markdown response
    formatted_markdown = response.choices[0].message.content.strip()
    return formatted_markdown


# Example usage
if __name__ == "__main__":
    # Read the unformatted markdown content from a file
    input_file = '/Users/rajamuhammedomar/latest-fyr/ForYourResearch/backend/app/pdf_parsing/split_mds/2eYbiBc5shN2ynLx857epU9BOH13/"augmented reality"/A Survey of Augmented Reality.pdf.md'
    output_file = "formatted_markdown.md"

    with open(input_file, "r") as file:
        unformatted_text = file.read()

    # Format the markdown text
    formatted_text = format_markdown(unformatted_text)

    # Write the formatted markdown to an output file
    with open(output_file, "w") as file:
        file.write(formatted_text)

    # Output to confirm file creation
    print(f"Formatted Markdown has been written to '{output_file}'")
