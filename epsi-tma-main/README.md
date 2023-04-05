
# TMA Epsi

Ce projet comporte des bugs qu'il est necessaire de corriger. Elaborez un 
plan, une roadmap, et effectuez des maintenances 
- corrective : correction de bugs
- evolutive : evolution du code => ajout de fonctionnalité
- préventive : modifiez le code qui peut generer une erreur

le front-end est en Angular 15 et le back-end en FastAPI

## Pré-requis
Il vous faudra sur votre poste : 
- [NodeJS](https://nodejs.org/dist/v18.15.0/node-v18.15.0.pkg)
- [Python](https://www.python.org/ftp/python/3.11.2/python-3.11.2-macos11.pkg)

N'oubliez pas egalement un IDE, vous aidant de manière considérable.
- [Visual Studio code](https://code.visualstudio.com/)
- [PyCharm](https://www.jetbrains.com/fr-fr/pycharm/download/)
- [WebStorm](https://www.jetbrains.com/fr-fr/webstorm/)

## Utilisation

Afin de pouvoir lancer le projet back, vous devez faire dans le dossier 
back : 
``` pip install -r ./requirements.txt ```
, puis, ``` python -m uvicorn main:app --reload ```

Enfin, dans le dossier, front ``` npm install ``` , puis, ``` ng serve ```


