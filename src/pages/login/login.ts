import { Component } from '@angular/core';
import { NavController , AlertController ,NavParams, IonicPage } from 'ionic-angular';
import { RegisterPage} from '../register/register'


import { usercreds } from '../../models/interfaces/usercreds';

import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  credentials = {} as usercreds;
  
  constructor(private alertCtrl: AlertController, public navParams: NavParams,public authservice: AuthProvider,public navCtrl: NavController) {
    
  }

  alert(message:string) {
    this.alertCtrl.create({
    	title:'Login',
    	subTitle: message,
    	buttons:['ok']
      
    }).present();
   
  }

  SignInUser(){
  	this.authservice.login(this.credentials).then((res: any) => {
      if (!res.code)
        this.navCtrl.setRoot('LoginPage');
      else
      this.alert(res.message);
      
    })
  		 
      
  } 
  
  // logout() {
  //   this.authservice.Logout();
  //     } 
   register(){
   	this.navCtrl.push(RegisterPage);
   }
}
