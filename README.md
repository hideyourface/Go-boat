# Go Boat
Go boat is a project made from scratch for a fast search and app tool simulator in Angular. 
The objective was to develop from scratch a Boostrap/material free application, that will allow to run a mock back end server in order to try some functionnality as :
- add a new boat
- search boats with criteria

Go Boat is structured to check on devise and charge a desktop, tablet or smartphone version.
That apart, Go Boat is designed to be as much responsive as possible.

Go Boat is made to test some Angular functionality such as:
- angular grids,
- SCSS functions
- behaviour subject and observables
- comunication with mock servers
- building of query on specific criteria
- RXJS pipes and mapping

## Grid
Go Boat structure is designed by javascript object with the help of angula material grid. 
The structure conception was made on mobile's first logic.
Every component can have his on grid (or multiples grids for desktop/mobile display).
A device detector will allow each component to adapt himself from mobile to tablet/desktop version
Blocks and Items of the grid are defined in interface to give strict structure to the whole application

## SCSS
All Go Boat colors are structured in asset/theme.scss and called via an scss function.
All Go Boat SCSS is designed to be factorised as much as possible, and to return an application as much responsive as possible. 
There is no Bootstrap or other libraries in this project: all the SCSS code is developed from scratch.
## TS structure
A shared folder is present to handle shared component.
Services are in charge to simulate all front/back comunication and other shared funtionality.
The most common custom object are structured with interfaces.
The application is structured divided by screen. Every screen can contain a page component, 
one or more container components, and one ore more dumb components.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Mock Back-end Server
Go Boat came with his own Mock Server to simulate back end and database services.
Run `npm run mock-server` to launch the mock back-end server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Future possiblities

Go Boat can be a good base to try and test other angular specific functions like:
- passage to NgRx logic
- passage from Template Driven Forms to Reactive Forms
- passage to Lazy Loading architecture
- Custom pipes (such as translate)
- Custom Directives
- CSS animations
- Export in Angular Ionic
- Unit test developement
- Icon centralisation in Library
- Use of Angular Material Components
- Factorisation of grid code
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
