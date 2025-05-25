from pydantic import BaseModel

class UserCreate(BaseModel):
    username: str
    password: str

class UserOut(BaseModel):
    id: int
    username: str
    class Config:
        orm_mode = True

class MovieBase(BaseModel):
    title: str
    description: str

class ReviewCreate(BaseModel):
    movie_id: int
    content: str

