
from sqlalchemy import PrimaryKeyConstraint, Integer, Column, Float, String

from core.database.database import Base


class Product(Base):
  __tablename__ = "Product"
  id = Column(Integer, index=True, nullable=False, autoincrement=True)
  name = Column(String(144), nullable=False)
  price = Column(Float, nullable=False)
  quantity = Column(Integer, nullable=False)

  __table_args__ = (PrimaryKeyConstraint('id'),)
