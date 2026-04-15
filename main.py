import os
from typing import Optional

from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/assets", StaticFiles(directory="frontend/build/client/assets"))

@app.get("/")
async def root():
    return FileResponse(path=os.path.join("frontend", "build", "client", "index.html"))

@app.get("/api/vendors")
async def get_vendors():
    return [{"name": "Amul"}, {"name":"Aavin"}]

@app.get("/api/customers")
async def get_vendors():
    return [{"name": "Hari"}, {"name":"Vani"}]

@app.get("/{rest_of_path:path}")
async def catch_all(rest_of_path: str):
    return FileResponse(path=os.path.join("frontend", "build", "client", "index.html"))