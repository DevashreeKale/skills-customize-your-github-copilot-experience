from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Dict

app = FastAPI(title="FastAPI Assignment")


class Item(BaseModel):
    title: str
    description: str | None = None


db: Dict[str, dict] = {}
next_id = 1


@app.get("/")
async def root():
    return {"message": "FastAPI assignment root"}


@app.get("/items/")
async def list_items():
    return list(db.values())


@app.get("/items/{item_id}")
async def get_item(item_id: str):
    item = db.get(item_id)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    return item


@app.post("/items/", status_code=201)
async def create_item(item: Item):
    global next_id
    item_id = str(next_id)
    next_id += 1
    obj = item.dict()
    obj.update({"id": item_id})
    db[item_id] = obj
    return obj


@app.put("/items/{item_id}")
async def update_item(item_id: str, item: Item):
    if item_id not in db:
        raise HTTPException(status_code=404, detail="Item not found")
    obj = item.dict()
    obj.update({"id": item_id})
    db[item_id] = obj
    return obj


@app.delete("/items/{item_id}", status_code=204)
async def delete_item(item_id: str):
    if item_id not in db:
        raise HTTPException(status_code=404, detail="Item not found")
    del db[item_id]
    return None
