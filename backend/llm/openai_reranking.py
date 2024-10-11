import openai

openai.api_key = "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"


def document_relevance(query, abstracts):
    results = []
    prompt_template = '''
    You are an Assistant responsible for helping detect whether the retrieved document is relevant to the query. For a given input, you need to output a single token: "Yes" or "No" indicating the retrieved document is relevant to the query.

    Query: {query}
    Document: """{document}"""
    Relevant:
    '''

    for document in abstracts:
        prompt_filled = prompt_template.format(query=query, document=document)

        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt_filled},
            ],
            temperature=0,
            max_tokens=1,
            logprobs=True,  # Set to True instead of 1
            logit_bias={3363: 1, 1400: 1},  # Bias towards "Yes" and "No"
        )

        # Access content directly via attribute
        relevance = response.choices[0].message["content"].strip()
        logprob = response.choices[0].logprobs["token_logprobs"][
            0
        ]  # Get the logprob of the response

        results.append(
            {
                "abstract": document[:100]
                + "...",  
                "relevance": relevance,
                "logprob": logprob,
            }
        )

    return results


# Example list of abstrcts (you can replace with your actual abstracts)
abstracts = [
    """Cars were invented in 1886, when German inventor Carl Benz patented his Benz Patent-Motorwagen...""",
    """The Pfizer-BioNTech COVID-19 vaccine was approved for emergency use in the United States...""",
    """Proximal Policy Optimization and its Dynamic Version for Sequence Generation...""",
    """Inside the bubble: exploring the environments of reionisation-era Lyman-α emitting galaxies with JADES...""",
]

query = "What are some papers to learn about PPO reinforcement learning?"

relevance_results = document_relevance(query, abstracts)

# Print out each result
for result in relevance_results:
    print(f"Abstract: {result['abstract']}")
    print(f"Relevance: {result['relevance']}")
    print(f"Logprob: {result['logprob']}\n")
