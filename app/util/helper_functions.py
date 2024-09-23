import re, os, json


def parse_query(query):

    query = re.sub(r"\sOR\s", " | ", query)
    query = re.sub(r"\sAND\s", " + ", query)
    return query


def is_in_production():
    return os.getenv("ENV") == "production"


def filter_papers(papers):
    seen_titles = set()
    unique_papers = []
    for paper in papers:
        if paper["title"] not in seen_titles:
            unique_papers.append(paper)
            seen_titles.add(paper["title"])
    return unique_papers
