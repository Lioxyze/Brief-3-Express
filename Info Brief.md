# Première semaine - Les bases du back

## Setup Machine

- Découverte de Markdown
  - prise de notes obligatoire
  - Les tips de la veille :
    - techno + awesome
    - techno + cheatsheet
- Unix (Linux / MacOS / WSL)
  - WSL2 pour Windows (activer la vitualisation Hyper-V et si besoin dans le BIOS)
  - Installer Ubuntu en LTS
  - git est installé par défaut
- Créer un compte Github
  - Créer et lier une clé SSH 
  - https://docs.github.com/fr/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
  - https://docs.github.com/fr/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
- Les bases de la ligne de commande
  - navigation dans les dossiers => aller dans votre répertoire home (~)
  - créer un dossier `dev`
- installer nvm
  - désinstaller nodejs si déjà installé
  - installer nvm via le script d'installation
  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
  ```
  - lister les versions de nodejs disponibles et installer la dernière LTS
  ```bash
  nvm ls-remote
  nvm install <version>
  nvm use <version>
  ```
  - vérifier l'installation
  ```bash
  node -v
  ```

## Projet de cette semaine

Thème : la cuisine ! Nous allons nous créer notre propre API de recettes de cuisine en utilisant toute la connaissance de Marmiton (pas bien ...).

Nous découvrirons ou stabiliserons la connaissance sur :
- les bases des bases de données relationnelles (schema et requêtes SQL simples)
- l'utilisation d'un headless CMS
- l'utilisation d'une API RESTful propre
- les bases avec nodejs
- les API Rest avec expressjs
- le versionning avec git et github
- les bases du devops avec docker
- les bases de la CI/CD avec github actions et Render
- le scraping avec puppeteer

### Définition du projet

L'objectif est de créer une API Restful qui permettra de réaliser des opérations CRUD (Create, Read, Update, Delete) sur des recettes de cuisine.
La base de données n'aura pas de relations. Une table utilisateurs permettra de gérer la sécurisation de notre API. Et une table recette permettra de stocker les recettes.
Les recettes viendront d'un site de cuisine à la mano ou via du scraping.

### Etapes à réaliser

#### Strapi

1. Créer un nouveau Strapi project
2. Créer la collection "recettes" avec les champs suivants :
  - titre (string)
  - temps de préparation (integer)
  - difficulté (integer)
  - budget (integer)
  - description (text)
3. Récupérer des recettes à la main sur Marmiton ou autre site de cuisine
Je vous conseille :
https://encuisine.adrienrossignol.fr/recette/45
Les recettes vont de 1 à 45.
https://www.marmiton.org/recettes/recette-hasard.aspx?v=2
4. Ajouter les recettes dans Strapi avec l'extension Rest client de VSCode
https://marketplace.visualstudio.com/items?itemName=humao.rest-client
5. Sécuriser l'API avec JWT
6. Ajouter la documentation Swagger avec le plugin Documentation
7. Bonus : Utiliser l'extension GraphQL pour tester les requêtes GraphQL
8. Bonus pour ceux en avance : faire du scraping avec puppeteer pour ajouter les recettes automatiquement

#### Express avec NodeJS

0. Suivre le cours sur nodejs et express
0. Suivre l'introduction aux bases de données relationnelles
0. S'entrainer aux requêtes SQL simples avec SQL Zoo
1. Créer un nouveau projet nodejs avec express
```
npm init -y
npm install express
```
2. Changer le package.json pour ajouter "type": "module"
3. Créer un serveur express basique
4. Créer une base de données avec sqlite3 et sqlite en dépendances
```bash
npm install sqlite3 sqlite
```
5. Ouvrir la base de données avec https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer
6. Créer la table utilisateurs
7. Créer la table recettes
8. Créer les routes CRUD pour les recettes
9. Suivre le cours sur l'authentification avec JWT
10. Ajouter l'authentification à l'API en respectant les même pratiques et routes que Strapi
11. Suivre le cours sur les bases de données relationnelles
12. Ajouter les ingrédients dans strapi
13. Ajouter les ingrédients dans sqlite
14. Ajouter la gestion des ingrédients dans l'API