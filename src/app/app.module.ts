import { NfcSharePage } from './../pages/nfc-share/nfc-share';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AddprofPage } from '../pages/addprof/addprof';
import { userDetailsPage } from  '../pages/userDetails/userDetails' ;
import { EditPage } from '../pages/editpage/edit';
import { ShareProfilePage } from './../pages/share-profile/share-profile';
import { ResetpasswordPage } from './../pages/resetpassword/resetpassword';
import { BscanserialPage } from './../pages/bscanserial/bscanserial';
import { DetailPage } from './../pages/detail/detail';

import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { BLE } from '@ionic-native/ble'
import { NFC, Ndef } from '@ionic-native/nfc';

import { UserProvider } from '../providers/user/user';

import { ImghandlerProvider } from '../providers/imghandler/imghandler';

import { ProfileProvider } from '../providers/profile/profile';
import { AuthProvider } from '../providers/auth/auth';



const firebaseAuth= {
    apiKey: "AIzaSyAwKSj0ER8zsXXmK1pDDpEaqsEzm7bxWPQ",
    authDomain: "virtualdeck-01.firebaseapp.com",
    databaseURL: "https://virtualdeck-01.firebaseio.com",
    projectId: "virtualdeck-01",
    storageBucket: "virtualdeck-01.appspot.com",
    messagingSenderId: "267200803892"
  };
  

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    AddprofPage,
    userDetailsPage,
    EditPage,
    ResetpasswordPage,
    ShareProfilePage,
    DetailPage,
    BscanserialPage,
    NfcSharePage  
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    AddprofPage,
    userDetailsPage,
    EditPage,
    ResetpasswordPage,
    ShareProfilePage,
    DetailPage,
    BscanserialPage,
    NfcSharePage

   
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,

    ImghandlerProvider,

    BLE,
    ProfileProvider,

    


    AuthProvider,
    NFC,
    Ndef

  ]
})
export class AppModule {}
