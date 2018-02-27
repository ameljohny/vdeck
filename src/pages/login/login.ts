import { ResetpasswordPage } from './../resetpassword/resetpassword';
import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { NavController ,Alert, AlertController, Loading, LoadingController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterPage} from '../register/register';
import * as firebase from 'firebase/app';
import { HomePage } from '../home/home';
import { AuthProvider } from './../../providers/auth/auth';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
 email: string;
 password: string;
 public loading: Loading;

  constructor(private alertCtrl: AlertController,
    private fire: AngularFireAuth,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public authProvider: AuthProvider,) 
    {
  
  }

  alert(message:string) {
    this.alertCtrl.create({
    	title:'Login',
    	subTitle: message,
    	buttons:['ok']
      
    }).present();
   
  }

  
  SignInUser(){
    const email = this.email;
      const password = this.password;

      this.authProvider.loginUser(email, password).then(
        authData => {
          this.loading.dismiss().then(() => {
            this.navCtrl.setRoot(HomePage);
          });
        },
        error => {
          this.loading.dismiss().then(() => {
            const alert: Alert = this.alertCtrl.create({
              message: error.message,
              buttons: [{ text: 'Ok', role: 'cancel' }]
            });
            alert.present();
          });
        }
      );
      this.loading = this.loadingCtrl.create();
      this.loading.present();
      
  } 
  resetpassword(){
    this.navCtrl.push(ResetpasswordPage);
  }
  logout() {
    this.fire.auth.signOut();
      } 
   register(){
   	this.navCtrl.push(RegisterPage);
   }
}
