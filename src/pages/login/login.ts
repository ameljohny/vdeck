import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(private fire: AngularFireAuth,public navCtrl: NavController) {
    
  }

  SignInUser(){
  	this.fire.auth.signInWithEmailAndPassword(this.username.value,this.password.value)
  	.then(() => {
  		console.log('userloggedIN');

  		})
  	.catch( error => {
  		console.log('got error', error);
  		
  		}) 
   
    
  }

}
