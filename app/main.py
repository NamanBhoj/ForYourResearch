from fastapi import Depends, FastAPI
from mangum import Mangum
from routers import papers, library
from util.helper_functions import is_in_production
from fastapi.middleware.cors import CORSMiddleware
from models.search import SearchCreate
from dependencies import get_db
from sqlalchemy.orm import Session
from schemas.search import Search

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# need allow origins for local only else it gives error in aws
if not (is_in_production()):
    app.add_middleware(
        CORSMiddleware,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
        allow_origins=(["*"]),
    )

app.include_router(papers.router)
app.include_router(library.router)


handler = Mangum(app)


# this is only for testing purposes
@app.get("/", response_model=SearchCreate)
async def root(db: Session = Depends(get_db)):
    search_row = Search(uid="123", search_query="Cross Reality")
    db.add(search_row)
    db.commit()
    db.refresh(search_row)
    return search_row
