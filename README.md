# barbell-hero


[![Travis (.org)](https://img.shields.io/travis/BarbellHero/barbell-hero.svg)](https://www.travis-ci.org/BarbellHero/barbell-hero)
[![SonarQube Tech Debt](https://sonarcloud.io/api/project_badges/measure?project=Towerism_BarbellHero&metric=coverage)](https://sonarcloud.io/dashboard?id=Towerism_BarbellHero)
[![SonarQube Tech Debt](https://sonarcloud.io/api/project_badges/measure?project=Towerism_BarbellHero&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=Towerism_BarbellHero)

> A workout tracker that stays out of your way

Production: https://barbell-hero.herokuapp.com
Development: https://barbell-hero-development.herokuapp.com
Staging: https://barbell-hero-staging.herokuapp.com

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/barbell-hero; yarn
    ```

3. Start your app

    ```
    docker-compose up
    ```

## Testing

Simply run `yarn test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
