import re


def Parse_Query(query):

    query = re.sub(r"\sOR\s", " | ", query)
    query = re.sub(r"\sAND\s", " + ", query)
    return query


# input_expression = '("medical image" OR device) AND ("virtual reality" OR "augmented")'

# print(Parse_Query(input_expression))
