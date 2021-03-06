import { Component, ViewChild } from '@angular/core';
import { NavController , AlertController  } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterPage} from '../register/register'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController,private fire: AngularFireAuth,public navCtrl: NavController) {
    
  }

  alert(message:string) {
    this.alertCtrl.create({
    	title:'Login',
    	subTitle: message,
    	buttons:['ok']
      
    }).present();
   
  }

  SignInUser(){
  	this.fire.auth.signInWithEmailAndPassword(this.email.value,this.password.value)
  	.then(() => {
  		this.alert('success,you are logged in');
  		
  		//user logged in

  		})
  	.catch( error => {
  		this.alert(error.message);
  		}) 
   
    
  }
   register(){
   	this.navCtrl.push(RegisterPage);
   }
}
