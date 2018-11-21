# Ecart application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
"# CRUDANGULAR" 

















# Notes 


## Httpclient
1   All observables returned from HttpClient methods are cold by design.
2   The AsyncPipe subscribes (and unsubscribes) for you automatically.
3   An HttpClient method does not begin its HTTP request until you call subscribe() on the observable returned by that method. This is true for all HttpClient methods.
4   In fact, each subscribe() initiates a separate, independent execution of the observable. Subscribing twice results in two HTTP requests.
5 



## Pipeable Operators
1   do -> tap
2   catch -> catchError
3   switch -> switchAll
4   finally -> finalize


## Essentials
map
filter
scan
merge

##Taking
take
takeWhile
first

## Skipping
skip (soon)
skipWhile
takeLast
last

##Time
delay
debounceTime
throttleTime

##Reducing
reduce
min (soon)
max
count

##Concatenating
startWith (soon)
endWith (soon)
concat (soon)

## Combining
combineLatest
zip