import { Component, ViewChild } from '@angular/core';
import { NavController , AlertController  } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterPage} from '../register/register'
import * as firebase from 'firebase/app';

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
    //user = mAuth.getCurrentUser().reload();
  	this.fire.auth.signInWithEmailAndPassword(this.email.value,this.password.value)
    //user.isEmailVerified()
    .then((success) => {
  		this.alert('success,you are logged in');
  		
  		//user logged in

  		})
  	.catch( error => {
  		this.alert(error.message);
      }) 
      
  } 
  login() {
    this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }   
  logout() {
    this.fire.auth.signOut();
      } 
   register(){
   	this.navCtrl.push(RegisterPage);
   }
}
