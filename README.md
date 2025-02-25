# SPORTSEE

SportSee est une startup spécialisée dans le coaching sportif. Ce projet vise à développer la nouvelle page profil utilisateur qui permet de suivre l'activité sportive, notamment :

-   Le nombre de sessions réalisées

-   Le nombre de calories brûlées

-   Les performances sportives

-   La durée moyenne des sessions

Seule la page profil est implémentée, les autres pages de l'apllcation sont en cours de construction.

L'application est développée avec React et utilise Recharts pour l'affichage des graphiques.

# Installation et exécution du projet:

## Prérequis:

-   Node.js installé sur votre machine.
-   Yarn ou npm

## Technologies utilisées:

-   React: pour le développement de l'interface.
-   Recharts: Librairie graphique pour l'ffichage des graphiques.
-   Axios: pour gérer les appels API.
-   React Rouer: pour gérer la navigation dans l'application.

## Installation

### 1. Back-End:

Clonez le dépôt du projet (https://github.com/OpenClassrooms-Student-Center/SportSee) et suivez les instructions de son README.md pour son installation et son démarrage.

### 2. Front-End:

#### 2.1. Clonez le dépôt:

    [Sportsee front-end](https://github.com/Asma-A-S/SportSee_front.git)

#### 2.2. Installer les dépendances:

    npm install

#### 2.3. Démarrer l'application React:

    npm run dev

### Gestion des données:

Le projet utilise un mécanisme de récupération de données qui varie en fonction de l'environnement.

-   Par défault, les données utilisées sont des données mockées récupérées depuis un fichier local situé dans **mocks**/mockData.js.
-   Pour utiliser les données via l'API REST de SportSee, il suffit de changer la variable VITE_USE_MOCK à false dans le fichier .env.
