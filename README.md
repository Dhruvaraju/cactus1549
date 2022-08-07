# Cactus1549

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4.

## Installing angular/cli

- download and Install node js from https://nodejs.org/en/
- Once installed to check if node js is installed in terminal run command

```
    node --version
```

- For installing angular cli run the following command

```
npm install -g @angular/cli
```

## Development server

To run angular app run any one of the app from a terminal

```
ng serve
```

or

```
npm start
```

Navigate to `http://localhost:4200/` once the application is started.

> The app will automatically reload if you change any of the source files.

## Integrated Development Environments (IDE)

We have multiple IDEs for developing angular applications such as Microsoft visual studio code, Webstorm from jetbrains.

Download Microsoft visual studio code from https://code.visualstudio.com/ and install it.

> We can open the earlier created project in vscode from File > Open Folder > "Browse to folder location and select it" > click open

## Adding bootstrap to project

run `npm install bootstrap` to add boot strap to project

Add the below entries to angular.json

`node_modules/bootstrap/dist/css/bootstrap.css` in the projects->architect->build->styles array,
`node_modules/bootstrap/dist/js/bootstrap.js` in the projects->architect->build->scripts array

> Restart app to see styles being added.

## Adding components

- To add a new component syntax is `ng generate component <<component-name>>`
- To create a navbar component we can use

```
ng generate component navbar
```

For this example app we will create a navbar, footer, login and registration page.

> To disable strict variable initialization set the below variable to false in ts config
>
> ```
> "strictPropertyInitialization": false,
> ```

## Angular forms

- Template driven forms
- Modal driven forms

### Registration form

- We will make use of template driven forms for creating our registration form.
- import `FormsModule` in `app.module.ts` from `@angular/forms`.
- For all the field that need to be included in a form place `ngModel` in its attributes.
- `name` field is mandatory for all the fields that need to be included in form.
- Form name is defined by using syntactic sugar `#`, we can name our form as `#registrationForm`
- define a form using `ngForm` as the vale of the form attribute.

### Login form

- We will make use of modal driven forms for creating log in form.
- import `ReactiveFormsModule` in `app.module.ts` from `@angular/forms`.
- For all the field that need to be included in a form place `formControlName` in its attributes.
- we need to build a form using `FormGroup`, define it as constructor variable.
  ```
  this.loginForm = this.formBuilder.group({
      userName: ['',Validators.required],
      password: ['',Validators.required]
    })
  ```
- We need to mention the form group in html as below
  ```
  <form [formGroup]="loginForm" (ngSubmit)="loginFormSubmitted()">
  ```

# Additional Information

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
