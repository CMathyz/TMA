from sqlalchemy.orm import Session

from core.models.Product import Product as ProductModel
from core.schemas.Product import Product as ProductSchema


def get_all_products(db: Session):
  return db.query(ProductModel).all()


def create_product(db: Session, product: ProductSchema):
  product_model = ProductModel(name=product.name, price=product.price, quantity=product.quantity)
  db.add(product_model)
  db.commit()
  db.refresh(product_model)


def get_product_by_id(id: int, db: Session):
  return db.query(ProductModel).filter(ProductModel.id == id).first()


def update_product_by_id(product: ProductSchema, id: int, db: Session):
  product_model = get_product_by_id(id, db)
  product_model.name = product.name
  product_model.price = product.price
  product_model.quantity = product.quantity
  db.commit()
  db.refresh(product_model)


def delete_product_by_id(id: int, db: Session):
  product_model = get_product_by_id(id, db)
  db.delete(product_model)
  db.commit()
