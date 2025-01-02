import openai

openai.api_key = "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"

prompt = """
You are an Assistant responsible for helping determine whether the title of a paper is relevant to the query. This is the systematic step to check it:
1. Check if the title contains atleast 50 percent of the words in the query. If it does, output "Yes" and stop.
2. If the title does not contain atleast 50 percent of the words in the query. Check if the title has synonyms for the words which are not in query. If including synonys the total percentage is more than 50, output "Yes" and stop.
3. If the title does not contain atleast 50 percent of the words in the query and does not have any synonyms for the words which are not in query, output "No" and stop.

Query: {query}
Title: {title}
Respond only with 'Yes' or 'No' with the percentage number in the end.
"""


def screen_titles(titles, query):
    """
    Check the relevance of document titles to a query using GPT with 'Yes' or 'No' responses.

    Args:
        titles (list): A list of document titles.
        query (str): The search query.

    Returns:
        set: A set of titles deemed relevant to the query.
    """
    relevant_titles = set()
    for title in titles:
        # try:
        response = openai.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "system",
                    "content": "You are an Assistant responsible for helping detect whether the retrieved document is relevant to the query.",
                },
                {
                    "role": "user",
                    "content": prompt.format(query=query, title=title),
                },
            ],
            temperature=0,
        )
        completion = response.choices[0].message.content.strip().lower()

        if completion == "yes":
            relevant_titles.add(title)
        # except Exception as e:
        #     print(f"Error processing title '{title}': {e}")
    return relevant_titles


paper_titles = [
    "Machine Learning Techniques for Data Analysis",
    "Quantum Computing and its Applications",
    "Deep Learning for Image Recognition",
    "Economic Impacts of Global Warming",
]
query = "machine learning applications"

# print(screen_titles(paper_titles, query=query))
