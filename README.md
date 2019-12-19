# TestAxanceFrontSilvestre

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# testTechniqueAxanceAngular
# testTechniqueAngularAxance

----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------

# READ ME 

## Install

Mettre à jour sa version de nodeJS, npm, Angular CLI, bootstrap

### Mode Developpeur

Run git clone 'le projet'.

Placez-vous dans le répertoire.

Run npm install --save pour importer tout les packages et module de la librairie.

Run ng serve --open pour lancer l'application.

En cas de problème d'affichage : Vérifier le schema styles : [] dans le fichier angular.json , la présence de bootstrap, ainsi que la présence de la balise dans le app-module.

### Déploiement
Placez-vous dans le répertoire du projet

Run `ng build --prod`

Run `npm install http-server`

Run `http-server dist/test-axance-front-silvestre`


## But du travail effectué

Le but est de concevoir le design d'une landing page d'un site e-commerce cross-plateform (desktop, ios, android). avec comme choix : statique, reactJS, ou angular. 

Selon mes compétences j'ai choisi, Angular 8.

3 pages sont demandées : La home page, product listing page, Pop-in Help.

Affichage des items par service.

## Travail effectué

### Structure du travail
La page home composées de la section shop et newsletter.

La section shop composée de sous-section Popular et Collections.

La page Product Listing, au préalable d'un achat avec divers systèmes de filtrage (plus de détails suite).

La Page Four-Ho-Four redirection des chemins URLs éronnés.

Les Modals Pop-In d'aide & Header side-nav présent sur toutes les pages 

-----------------------------------------------------------------------------------

### Fonctionnalités particulières développées dans ce test

#### Technologies
- Angular 8 
- TypeScript
- Less
- Bootstrap

#### Description non-exhaustive des tâches
- Application e-commerce
- Responsivité (desktop, mobile)
- Format ergonomique Mobile
- Media query 
- Animation sur SVG
- SVG
- Slideshows de présentation d'items e-commerce automatique (certains apparaissent uniquement si mobile screen)
- Structure de code travaillée -> Routing, Page, Component, Service, Module, Model, Modal, Assets, commentaires...
- Routing (route parameter, snapshot, wildcard, routing single page application, fragment, navigation, balise...) 
- Redirection
- JSON
- Manipulation des données indirecte par Service (Subject, souscription)
- Formulaire ReactiveForm et Validation (Newsletter)

#### Packages NPM utilisés & Modules
- Angular Material
- ReactiveFormsModule
- HTTPClientModule
- bootstrap
- bootswatch
- rxjs
- ng-bootstrap
- ngb-modal
- ng-simple-slideshow

-----------------------------------------------------------------------------------
### Scénario de parcours utilisateur

#### Home Page

##### Shop section
  - Slideshow : 
  - Contenu Slideshow dynamique par changement de route parameter : 
  - Svg Animate choice in-out items : 

##### Popular section
  - Listing dynamique des items populaire : 
  - Mention hot : 
  - Slideshow ngb-bootstrap shadowDom pour responsiv : 

##### Collections section

  - Display particulier avec directives structurelles :
  - Détermination de nouvelles collections par collection : 
  
##### Newsletter section

  - Formulaire Reactif :

#### Product Listing Page 
  - Item Service :
  - Item data / model :
  - Filtres / tri :
  
#### Pop-In

  - Ngb-modal : 

#### Header

  - Structure : 
  - Angular material : 
  - Side-nav-bar : 
  - Routing : 
  
#### Four-Ho-Four

  - Redirection : 


-----------------------------------------------------------------------------------
### A venir ...

- Route Guard pour la connexion
- Reactive Form création d'utilisateurs
- FireBase
- Panier intéractif
- Système de recherche
- Plus de pages (application totale)











