from fastapi import Depends, FastAPI
from mangum import Mangum
from .routers import papers
from .util.helper_functions import is_in_production
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# need allow origins for local only else it gives error in aws
if not(is_in_production()):
    app.add_middleware(
        CORSMiddleware,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
        allow_origins=(["*"]),
    )

app.include_router(papers.router)

handler = Mangum(app)


@app.get("/")
async def root():
    return {"message": "Hello Bigger Applications!"}
