import openai
from pydantic import BaseModel
from typing import List, Dict, Any
import re


openai.api_key = "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"

# prompt = '''
# You are a scientific Assistant responsible for determining if the provided document fully answers treating the document as evidence for the given query. If the document evidently answers the question, Output the response in json with response filled with "Yes" and cite field with the exact segments of text that answer the query (in an array) enclosed in quotation marks with confidence calculated based on logs_prob. If the document does not answer the query, respond with "No answer found."

# Query: {query}
# Document: """{document}"""
# Answer:
# '''


# class Response(BaseModel):
#     response: bool
#     cite: list[str]
#     confidence: list[float]


# def document_relevance(query, document):
#     response = openai.beta.chat.completions.parse(
#         model="gpt-4o-mini",
#         messages=[
#             {
#                 "role": "system",
#                 "content": "You are an Assistant responsible for answering questions based strictly on the provided text. If the text contains an answer in context of the question, respond with 'Yes' followed by all segments of the text that answer the question as an array, enclosed in quotation marks. If the text does not answer the question, respond with 'No answer found.'",
#             },
#             {"role": "user", "content": prompt.format(query=query, document=document)},
#         ],
#         temperature=0,
#         logprobs=True,
#         response_format=Response,
#     )

#     return response


# # x = """
# # put abstract here
# # """

# # abstracts = ["Sdfsjkdnfkjsdfskjnkjsnjkndgjknsgkn"]
# # query = "What is the future work suggested in the paper?"

# # for abstract in abstracts:
# #     response = document_relevance(query, abstract)
# #     # print(response.choices[0].message.content)
# #     # print(response.choices[0].message.content)
# #     print(response.choices[0].message.content)


class ChatCompletionResponse(BaseModel):
    content: str


class ResponseModel(BaseModel):
    choices: List[ChatCompletionResponse]


import json


def get_rq_answers(paper_titles, queries, documents):
    relevance_results = []
    i = 0

    # Loop through each paper and its associated document text
    for paper_title, document in zip(paper_titles, documents):
        print(i + 1)
        i += 1
        paper_data = {paper_title: {}}

        # Loop through each query for the current document
        for query in queries:
            print("should say twice")
            try:
                response = openai.beta.chat.completions.parse(
                    model="gpt-4o-mini",
                    messages=[
                        {
                            "role": "system",
                            "content": """You are an Assistant responsible for answering questions based strictly on the provided text.
                            If the text contains an answer in context of the question, respond with 'Yes' followed by first fullstop of all
                            text segments that answer the question as an array, enclosed in quotation marks. If the text does not answer
                            the question, respond with 'No answer found.'""",
                        },
                        {"role": "user", "content": f"{query} based on: {document}"},
                    ],
                    max_completion_tokens=16384,
                    temperature=0,
                )

                # Get the content directly from the response
                answer = response.choices[0].message.content.strip()

                # Check if the response includes "Yes" and parse relevant segments
                if "Yes" in answer:
                    # Clean up brackets, escaped quotes, and extra spaces
                    segments = [
                        segment.strip('"').replace('\\"', "").strip()
                        for segment in answer.replace("Yes", "").strip("[]").split(", ")
                    ]

                    # Remove leading '[' and any leading/trailing '"' from the first segment
                    if segments:
                        segments[0] = segments[0].lstrip("[").strip('"').strip()

                    paper_data[paper_title][query] = segments
                else:
                    paper_data[paper_title][query] = ["No answer found."]

            except Exception as e:
                print(f"Error: {e}")
                paper_data[paper_title][query] = ["No answer found."]
                continue

        # Append the processed data for each paper to the results list
        relevance_results.append(paper_data)
        print("here3")

    return relevance_results


# def get_rq_answers(paper_titles, queries, documents):
#     i = 0
#     # Loop through each paper and its associated document text
#     for paper_title, document in zip(paper_titles, documents):

#         print(i + 1)
#         # Loop through each query for the current document
#         for query in queries:
#             print("should say twice")
#             response = openai.beta.chat.completions.parse(
#                 model="gpt-4o-mini",
#                 messages=[
#                     {
#                         "role": "system",
#                         "content": """You are an Assistant responsible for answering questions based strictly on the provided text.
#                         If the text contains an answer in context of the question, respond with 'Yes' followed by all segments
#                         of the text that answer the question as an array, enclosed in quotation marks. If the text does not answer
#                         the question, respond with 'No answer found.'""",
#                     },
#                     {"role": "user", "content": f"{query} based on: {document}"},
#                 ],
#                 temperature=0,
#                 logprobs=True,
#                 response_format=ResponseModel,
#             )
#             answer = response.choices[0].message.content.strip()
#             print(answer)
#     return answer


titles = ["3D medical image paper"]

abstracts = [
    "The most common way to view 3D medical images edited with the above-mentioned high-performance information is with a high-resolution display, which can take the form of either a traditional monitor or a head-mounted display (HMD) [28–30]. When combined with a 4 K or 8 K ultra-high-definition monitor system, it can provide sharper and clearer streaming video, providing detailed content that resolves information beyond the retina and helps to make a visual diagnosis [16]. Recent improvements in the medical image analysis and visualization equipment have led to the use of 3D medical images and holograms in clinical practice [5]. 3D medical images can also be viewed using a camera. With the evolution of HMD, XR technology has been integrated into HMD systems. Three-dimensional holograms can be displayed on HMD; VR with HMD has been used to educate and guide trainees in pedicle screw fixation and has shown greater accuracy in comparison to traditional teaching methods [31,32]. AR with HMD has been primarily used to facilitate intraoperative navigation/guidance in MISS [33,34]. With the introduction of AR/MR with HMD, an omnidirectional hologram is projected onto the surgeon’s field of view, allowing the surgeon to concentrate on the surgical field without returning to the monitor [7]."
]

query = [
    "How can 3D medical images be viewed?",
    "What are the risks?",
    # "What can be integrated into HMD systems?",
]
# print(get_rq_answers(titles, query, abstracts))


def clean_text(data):
    remove_pattern = r'\{"choices":\[\{"content":" |\\"|\\'

    def clean_string(text):
        text = re.sub(remove_pattern, "", text)
        text = re.sub(r'"}]}$', "", text)
        text = re.sub(r"^\[|\]$", "", text)
        return text.strip()

    # Iterate through the data structure and clean strings
    for key, value in data[0].items():
        for sub_key, text_list in value.items():
            value[sub_key] = [clean_string(text) for text in text_list]

    return data


# x = get_rq_answers(titles, query, abstracts)
# print(clean_text(x))
