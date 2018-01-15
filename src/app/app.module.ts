import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
<<<<<<< HEAD
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
=======
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AddprofPage } from '../pages/addprof/addprof';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


const firebaseAuth= {
    apiKey: "AIzaSyAwKSj0ER8zsXXmK1pDDpEaqsEzm7bxWPQ",
    authDomain: "virtualdeck-01.firebaseapp.com",
    databaseURL: "https://virtualdeck-01.firebaseio.com",
    projectId: "virtualdeck-01",
    storageBucket: "virtualdeck-01.appspot.com",
    messagingSenderId: "267200803892"
  };
  
>>>>>>> 0f875df504941dcde68f41fba7675058b9dea7d3

@NgModule({
  declarations: [
    MyApp,
<<<<<<< HEAD
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
=======
    HomePage,
    LoginPage,
    RegisterPage,
    AddprofPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule
>>>>>>> 0f875df504941dcde68f41fba7675058b9dea7d3
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
<<<<<<< HEAD
    HomePage
=======
    HomePage,
    LoginPage,
    RegisterPage,
    AddprofPage
>>>>>>> 0f875df504941dcde68f41fba7675058b9dea7d3
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    {provide: ErrorHandler, useClass: IonicErrorHandler}
=======
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   
>>>>>>> 0f875df504941dcde68f41fba7675058b9dea7d3
  ]
})
export class AppModule {}
