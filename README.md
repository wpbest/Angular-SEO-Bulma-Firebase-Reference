# Angular-SEO-Bulma-Firebase-Reference

Angular Search Engine Optimisation Bulma Firebase Reference (ngseobulmafirebaseref)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Documentation

[Node.js](https://nodejs.org/en/docs/)

[Angular](https://angular.io/)

[Angular CLI](https://cli.angular.io/)

[Firebase](https://firebase.google.com/docs/)

[Firebase CLI](https://firebase.google.com/docs/cli/)

[AnguarFire](https://github.com/angular/angularfire2)

[RxJS](http://reactivex.io/rxjs/)

## Install global packages: Angular CLI, Firebase Tools

```
npm install -g @angular/cli  
npm install -g firebase-tools  
```

## Code scaffolding

ng new ng8bulmatemplate --routing --style scss --enable-ivy --skip-install

### Using Ivy Renderer Engine


Until the Ivy Renderer Engine is in production I strongly recogmend disabling it. In the angularCompilerOptions in your project's tsconfig.app.json file set enableIvy to false.

```
{
  "compilerOptions": { ... },
  "angularCompilerOptions": {
    "enableIvy": false
  }
}
```

AOT compilation with Ivy is faster and should be used by default. In the angular.json workspace configuration file, set the default build options for your project to always use AOT compilation.

```
{
  "projects": {
    "ng8bulmatemplate": {
      "architect": {
        "build": {
          "options": {
            ...
            "aot": true,
            ...
          }
        }
      }
    }
  }
}
```

### Add Firebase hosting

Add the needed packages

```
npm install firebase @angular/fire --save
```

### Import the Angular Fire libraries

Modify app.module.ts to import the Firebase libraries. Add import for environment

```
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    ...
    AngularFireModule.initializeApp(environment.firebaseConfig), // initialize
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  ...
})  
```

Modify environment.ts and environment.prod.ts and add the firebase credentials.

environment.ts:
```
export const environment = {
  production: false,
  firebase: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  }
};
```

environment.prod.ts

```
export const environment = {
  production: true,
  firebase: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  }
};
```
### Setup Firebase

```
firebase login
? Allow Firebase to collect anonymous CLI usage and error reporting information? (Y/n) Y

Visit this URL on any device to log in:
https://accounts.google.com/o/oauth2/auth?client_id=...

Waiting for authentication...

Select the google account and then Authorize it for firebase

+  Success! Logged in as wpbest@gmail.com

firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /Users/william.best/Documents/GitHub/ng8bulmatemplate

? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choi
ces. 
 ◯ Database: Deploy Firebase Realtime Database Rules
❯◉ Firestore: Deploy rules and create indexes for Firestore
 ◉ Functions: Configure and deploy Cloud Functions
 ◉ Hosting: Configure and deploy Firebase Hosting sites
 ◉ Storage: Deploy Cloud Storage security rules

You're about to initialize a Firebase project in this directory:

  /Users/william.best/Documents/GitHub/ng8bulmatemplate

? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choi
ces. Firestore: Deploy rules and create indexes for Firestore, Functions: Configure and deploy Cloud Functions, Hosting: Configure a
nd deploy Firebase Hosting sites, Storage: Deploy Cloud Storage security rules

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

? Select a default Firebase project for this directory: 
❯ ng8bulmatemplate-94eb6 (ng8bulmatemplate) 

=== Firestore Setup

Firestore Security Rules allow you to define how and when to allow
requests. You can keep these rules in your project directory
and publish them with firebase deploy.

? What file should be used for Firestore Rules? (firestore.rules) 

Firestore indexes allow you to perform complex queries while
maintaining performance that scales with the size of the result
set. You can keep index definitions in your project directory
and publish them with firebase deploy.

? What file should be used for Firestore indexes? (firestore.indexes.json) 


=== Functions Setup

A functions directory will be created in your project with a Node.js
package pre-configured. Functions can be deployed with firebase deploy.

? What language would you like to use to write Cloud Functions? 
  JavaScript 
❯ TypeScript
? Do you want to use TSLint to catch probable bugs and enforce style? (Y/n) Y

=== Functions Setup

A functions directory will be created in your project with a Node.js
package pre-configured. Functions can be deployed with firebase deploy.

? What language would you like to use to write Cloud Functions? TypeScript
? Do you want to use TSLint to catch probable bugs and enforce style? Yes
✔  Wrote functions/package.json
✔  Wrote functions/tslint.json
✔  Wrote functions/tsconfig.json
✔  Wrote functions/src/index.ts
✔  Wrote functions/.gitignore
? Do you want to install dependencies with npm now? (Y/n) Y

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? dist
? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) Y
✔  Wrote dist/index.html

=== Storage Setup

Firebase Storage Security Rules allow you to define how and when to allow
uploads and downloads. You can keep these rules in your project directory
and publish them with firebase deploy.

? What file should be used for Storage Rules? (storage.rules)

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!
```

## Install Bulma

### Bulma Setup

Install the packages needed for Bulma.

```
npm install bulma --save
```
Update the styles property in angular.json to include the new stylesheet for Bulma.

```
{
  ...
  "styles": [
    "node_modules/bulma/css/bulma.min.css",
    "src/styles.css"
  ],
  ...
}
```

### Font Awesome

Install the packages needed for Font Awesome.

```
npm install @fortawesome/angular-fontawesome --save
npm install @fortawesome/fontawesome-svg-core --save
npm install @fortawesome/free-brands-svg-icons --save
npm install @fortawesome/free-solid-svg-icons --save
```

Modify app.module.ts and add the following imports for Font Awesome.

```
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule // Add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // library.add(faCoffee, faCheck, faEnvelope, faExclamationTriangle);
  }  
 }
```
### Install NPM Check Update (NCU) and Check packages.json for outdated packages

At times, the package.json file can get out of date from what is current. To check for outdated packages install npm-check-update, run ncu to see outdated packages, and then run ncu -u to update the packages.

```
npm install -g npm-check-updates
ncu
ncu -u
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

### ng new command switches used

#### --style=[css | scss | less | sass | styl]

The style option specifies what CSS preprocessor is used in building the project. the options are: css, scss, less, sass, styl.

#### --routing

The routing option generates a file app-routing.module.ts file.

#### --enable-ivy

The enable-ivy option enables the next generation renderer.

#### --skip-install

This skip-install option disables the npm install after code generation.

#### --skip-git

### ng new command

```
ng new ngseobulmafirebaseref --routing --style scss --enable-ivy --skip-install
```

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### ng generate commands

```
ng generate module core -m app
ng generate service core/auth
ng generate service core/notify
ng generate guard core/auth
ng generate module ui -m app
ng generate component ui/home-page -m ui
ng generate component ui/main-nav -m ui
ng generate component ui/notification-message -m ui
ng generate component ui/user-form -m ui
ng generate component ui/user-login -m ui
ng generate component ui/user-profile -m ui
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
