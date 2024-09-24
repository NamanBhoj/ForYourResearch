from fastapi import Depends, FastAPI
from mangum import Mangum
from .routers import papers, library, search
from .util.helper_functions import is_in_production
from fastapi.middleware.cors import CORSMiddleware
from .models.search import SearchCreate
from .dependencies import get_db
from sqlalchemy.orm import Session
from .schemas.search import Search

# from setproctitle import setproctitle

# test cicd
app = FastAPI()
# setproctitle("my_uvicorn_app")
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
app.include_router(search.router)


handler = Mangum(app)


# this is only for testing purposes
@app.get("/", response_model=SearchCreate)
async def root(db: Session = Depends(get_db)):
    search_row = Search(uid="123", search_query="Cross Reality")
    db.add(search_row)
    db.commit()
    db.refresh(search_row)
    return search_row


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
