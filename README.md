# ForYourResearch

A web application for conducting AI-assisted systematic literature reviews. Researchers can search academic papers, screen them by title and abstract using LLMs, and answer research questions against full-text open-access PDFs.

## Features

- **Paper search** — queries the Semantic Scholar API (up to 1,000 results per search)
- **AI title & abstract screening** — uses OpenAI to automatically classify papers as relevant or irrelevant
- **Full-text screening** — downloads open-access PDFs, parses them, and answers user-defined research questions against the full text
- **Library** — save searches and tagged papers to a personal library
- **Manual relevance tagging** — override AI decisions per paper
- **Paper viewer** — read parsed HTML/Markdown versions of papers in-browser
- **Stats & visualisations** — view screening statistics and reranking distributions

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, Tailwind CSS |
| Backend | FastAPI (Python), Mangum |
| Database | PostgreSQL via SQLAlchemy + Alembic |
| Vector DB | Pinecone |
| AI | OpenAI (embeddings, reranking, screening) |
| Auth | Firebase |
| Paper source | Semantic Scholar API |
| Hosting | AWS EC2 (backend), Vercel (frontend) |
| Reverse proxy | Caddy |

## Project Structure

```
ForYourResearch/
├── backend/
│   ├── app/
│   │   ├── routers/        # FastAPI route handlers (search, library, llm)
│   │   ├── crud/           # Database operations
│   │   ├── models/         # Pydantic request/response models
│   │   ├── schemas/        # SQLAlchemy schemas
│   │   ├── pdf_parsing/    # PDF → DOCX → Markdown/HTML pipeline
│   │   └── main.py         # App entrypoint
│   └── llm/                # Embeddings, reranking, generation logic
├── frontend/
│   └── src/
│       ├── components/     # UI components (Dashboard, Sidebar, tables)
│       ├── pages/          # Route-level pages
│       ├── contexts/       # Auth context
│       └── firebase/       # Firebase config
├── alembic/                # Database migrations
└── .github/workflows/      # CI/CD pipeline
```

## Getting Started

### Prerequisites

- Python 3.10+
- Node.js 18+
- PostgreSQL
- A Pinecone account
- An OpenAI API key
- A Firebase project
- A Semantic Scholar API key

### Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Set the required environment variables (database URL, API keys, Firebase credentials), then run migrations:

```bash
alembic upgrade head
```

Start the development server from the repo root:

```bash
uvicorn backend.app.main:app --host 0.0.0.0 --port 8000 --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend expects the backend at the URL configured in `frontend/.env.development`.

## API Overview

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/search` | Search Semantic Scholar for papers |
| `POST` | `/saveCurrentSearchResults` | Persist search results for a user |
| `GET` | `/getCurrentSearchResults` | Retrieve saved search results |
| `POST` | `/saveToLibrary` | Save a search + papers to the library |
| `GET` | `/fetchAllQueries` | List all saved searches for a user |
| `POST` | `/fetchPapersRelatedToQuery` | Get papers for a saved search |
| `POST` | `/updatePaperRelevance` | Manually update a paper's relevance tag |
| `POST` | `/screenTitlesAndAbstracts` | AI screening of titles and abstracts |
| `POST` | `/screenForResearchQuestions` | Full-text screening against research questions |
| `POST` | `/getHtml` | Retrieve parsed HTML for a paper |

## Deployment

The CI/CD pipeline in [.github/workflows/deploy.yaml](.github/workflows/deploy.yaml) deploys automatically on push to `development` or `production` branches:

- **Backend** — SSH into the target EC2 instance, pull the latest code, install dependencies, and restart the Uvicorn server behind Caddy.
- **Frontend** — Deployed separately via Vercel.
