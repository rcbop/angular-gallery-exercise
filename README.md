# Angular Gallery Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## steps

- install angular 13 `npm install -g '@angular/cli@13'`
- run `ng new a22571` (with angular router + CSS (no LESS nor SASS)
- enter folder `cd a22571`
- run `ng add @fortawesome/angular-fontawesome`
- run `ng add ng-bootstrap/ng-bootstrap`
- run `ng add @angular/flex-layout`
- edit `app.modules.ts`, add references to the previously installed external modules above inside @NgModule imports
- create component `ng generate component image-gallery` to be our home page gallery.
- add the new gallery component `image-gallery` to the angular router to be our root page `/`
- add new model interface inside `src/app/model/` for holding the image data based on the api response structure
- create service for getting image metadata `ng generate service image`
- implement methods to fetch images inside the service
- create `ng generate component image-details` for detailing an image
