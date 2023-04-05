from fastapi import APIRouter

from api.endpoints import ProductWs

routeur = APIRouter()
routeur.include_router(ProductWs.routeur, prefix='/product',
                       tags=["product"],
                       responses={404 : {"description":"Impossible"}})
