import openai
from pydantic import BaseModel
from typing import List, Dict

openai.api_key = "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"

prompt = '''
You are a scientific Assistant responsible for determining if the provided document fully answers treating the document as evidence for the given query. If the document evidently answers the question, Output the response in json with response filled with "Yes" and cite field with the exact segments of text that answer the query (in an array) enclosed in quotation marks with confidence calculated based on logs_prob. If the document does not answer the query, respond with "No answer found."

Query: {query}
Document: """{document}"""
Answer:
'''


class Response(BaseModel):
    response: bool
    cite: List[str]
    confidence: List[float]


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
                model="o1-mini",
                messages=[
                    {
                        "role": "system",
                        "content": "You are an Assistant responsible for answering questions based strictly on the provided text. If the text contains an answer in context of the question, respond with 'Yes' followed by all segments of the text that answer the question as an array, enclosed in quotation marks. If the text does not answer the question, respond with 'No answer found.'",
                    },
                    {
                        "role": "user",
                        "content": prompt.format(query=query, document=full_text),
                    },
                ],
                temperature=0,
                logprobs=True,
                response_format=Response,
            )
            if response.response:
                relevant_documents.append(title)

        result.append({query: relevant_documents})
    return result
