import re, os


def parse_query(query):

    query = re.sub(r"\sOR\s", " | ", query)
    query = re.sub(r"\sAND\s", " + ", query)
    return query


def is_in_production():
    return os.getenv("ENV") == "production"
