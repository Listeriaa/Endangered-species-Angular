# Angular-Iucn

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

You can see the application running here [endangered-species](https://endangered-species.laetitia-dev.com/)

## Stack

[![forthebadge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](http://forthebadge.com)
[![forthebadge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](http://forthebadge.com)
[![forthebadge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](http://forthebadge.com)
[![forthebadge](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](http://forthebadge.com)
[![forthebadge](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](http://forthebadge.com)
[![forthebadge](https://img.shields.io/badge/Typescript-1572B6?style=for-the-badge&logo=typescript&logoColor=white)](http://forthebadge.com)
[![forthebadge](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)](http://forthebadge.com)


## Work in Progress...

Re-working the app about endangered species to train myself on Angular (framework that I'll be using in an internship starting in march 2022).

## WIP

- Managed to get list of species from API (Observable...)
- Managed to attribute a threat category with options (french name, bootstrap class...) depending on the threat category sent by the API
- Managed to pass a specie on the componant Card
- Managed to attribute bootstrap classes and french phylogenic class depending on props
- Translation for name, and threats OK 
- Issues with Heroku deployment and env variables, which are gitignored => managed with yargs and dotenv
- BUT no SSL free certificate on Heroku so I also deployed the app on my own O2switch server

## Challenge 

- First time I'm using Typescript and it is very challenging for me.

## TODO

- I would like to add a filter on categories.
- At the moment, as my app targets french users, a call to IUCN API is made for all the cards to get the type of specie (fish, plant...) in order to translate it. I believe it's making the app running slow. I would like to find a way to only fetch the data if the card is in the user's view...
