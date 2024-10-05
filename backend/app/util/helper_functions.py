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


def find_database_name(urls: list):
    import re

    pattern = re.compile(r"^(?:https?://)?(?:www\.)?([^:/\n]+)")
    url_domain = []
    for url in urls:
        try:
            domainname = pattern.search(url)
            if domainname:
                url_domain.append((url, domainname.group(1)))

        except Exception as e:
            print(e)
            return None
    return url_domain


urls = [
    "https://arxiv.org/pdf/2106.13475",
    "https://www.scirp.org/pdf/lce_2021012616413497.pdf",
    "https://journals.aps.org/prl/pdf/10.1103/PhysRevLett.125.206401",
    "https://www.tandfonline.com/doi/pdf/10.1080/14686996.2020.1808433?needAccess=true",
    "https://jcheminf.biomedcentral.com/track/pdf/10.1186/s13321-021-00533-z",
    "https://sustainenergyres.springeropen.com/counter/pdf/10.1186/s40807-023-00078-9",
    "http://uhra.herts.ac.uk/bitstream/2299/25787/1/Building_energy_consumption_prediction_using_deep_learning.pdf",
    "mdpi.com/saomethingbogus/2453-12",
    "https://onlinelibrary.wiley.com/doi/epdf/10.1155/2023/1056387",
    "https://link.springer.com/content/pdf/10.1007/s11356-022-21723-8.pdf",
    "https://e-archivo.uc3m.es/bitstream/10016/30312/1/machine_cc_2016_ps.pdf",
    "https://www.nature.com/articles/s41598-022-06687-6.pdf",
    "https://www.mdpi.com/2076-3417/12/4/2160/pdf?version=1645515360",
    "https://www.mdpi.com/2076-3417/11/5/2229/pdf?version=1614772869",
    "http://manuscript.elsevier.com/S030626192100310X/pdf/S030626192100310X.pdf",
    "https://www.nature.com/articles/s41467-020-20342-6.pdf",
    "https://link.springer.com/content/pdf/10.1007/s42452-020-2024-9.pdf",
    "https://ieeexplore.ieee.org/ielx7/6287639/6514899/09508419.pdf",
    "https://dr.ntu.edu.sg/bitstream/10356/154706/3/Revised%20Manuscript%20R2.pdf",
    "https://www.frontiersin.org/articles/10.3389/feart.2021.596860/pdf",
    "https://ieeexplore.ieee.org/ielx7/8782711/9277733/09376307.pdf",
]


ans = find_database_name(urls)

for i in ans:
    print(i)
