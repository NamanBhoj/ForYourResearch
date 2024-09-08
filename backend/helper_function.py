
import re

def Parse_Query(query):
   
    expression = re.sub(r'\sOR\s', ' | ', expression)
    expression = re.sub(r'\sAND\s', ' + ', expression)
    return expression


# input_expression = '("medical image" OR device) AND ("virtual reality" OR "augmented")'
