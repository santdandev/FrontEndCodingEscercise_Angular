# FrontEndCodeChallenge
This a sample application in Angular to solve the frontend code challange. This is a simple page application, which retrieved from an established REST API and renders in a component.

## How to Run the Application
Run `nmp i` from product folder
Run `ng serve` to start local server and navigate to `http://localhost:4200`

## How to generate optimized production Build
Run `ng build --prod` to build the project. This artifacts will be generated to `dist/` directory.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Technologies Used
* Node (version: 12.18.3)
* Angular (version: 10.2.0)
* Jasmine-Karma for Unit Testing

## Salient Features
* Created a separate module "endless" with component, model, service and utility
* HttpClientModule has been used to consume REST API
* Parallax scrolling has been implemented
* Unit Test cases has been written
* Generating production build gives a very small and optimized bundle files
