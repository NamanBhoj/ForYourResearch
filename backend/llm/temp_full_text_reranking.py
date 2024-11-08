import openai
from pydantic import BaseModel
from typing import List, Dict

openai.api_key = "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"

prompt = '''
You are a scientific Assistant responsible for determining if the provided document fully answers the given query, treating the document as evidence. If the document evidently answers the question, output "Yes". If not, output "No".
Query: {query}
Document: """{document}"""
Answer:
'''


def document_relevance(
    queries: List[str], documents: List[Dict[str, str]]
) -> List[Dict[str, List[str]]]:
    result = []
    for query in queries:
        relevant_documents = []
        for doc in documents:
            title = doc.get("title", "")
            full_text = doc.get("full_text", "")
            response = openai.beta.chat.completions.parse(
                model="gpt-4o-mini",
                messages=[
                    {
                        "role": "system",
                        "content": "You are an Assistant responsible for answering questions based strictly on the provided text. If the text contains an answer in context of the question, respond with 'Yes'. If the text does not answer the question, respond with 'No'.",
                    },
                    {
                        "role": "user",
                        "content": prompt.format(query=query, document=full_text),
                    },
                ],
                temperature=0,
            )
            answer = response.choices[0].message.content.strip()
            if answer == "Yes":
                relevant_documents.append(title)

        result.append({query: relevant_documents})
    return result
