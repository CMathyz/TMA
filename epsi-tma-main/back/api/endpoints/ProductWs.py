from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from core.schemas.Product import Product as ProductSchema
from core.database.database import get_db
from core.service import ProductService

routeur = APIRouter()


# Obtention de tous les produits
@routeur.get("/", response_model=list[ProductSchema])
async def get_all_products(db: Session = Depends(get_db)):
  products = ProductService.get_all_products(db)
  return products


# Obtention d'un produit via son ID
@routeur.get("/{id}", response_model=ProductSchema)
async def get_product_by_id(id: int, db: Session = Depends(get_db)):
  product = ProductService.get_product_by_id(id, db)
  return product


# modification d'un Produit
@routeur.put("/{id}")
async def update_product_by_id(product: ProductSchema, id: int, db: Session = Depends(get_db)):
  ProductService.update_product_by_id(product, id, db)


# suppression d'un produit via son id
@routeur.delete("/{id}")
async def delete_product_by_id(id: int, db: Session = Depends(get_db)):
  ProductService.delete_product_by_id(id, db)


# création d'un produit
@routeur.post("/")
async def create_product(product: ProductSchema, db: Session = Depends(get_db)):
  ProductService.create_product(db, product)
