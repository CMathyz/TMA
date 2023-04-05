
from pydantic import BaseModel, validator


class ProductBase(BaseModel):
  id: int = None
  name: str
  price: float
  quantity: int


class ProductUpdate(BaseModel):
  pass


class ProductCreate(ProductBase):
  pass


class Product(ProductBase):
    class Config:
      orm_mode = True
