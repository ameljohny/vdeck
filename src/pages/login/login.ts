import { ResetpasswordPage } from './../resetpassword/resetpassword';
import { UserProvider } from './../../providers/user/user';
import { Component, ViewChild } from '@angular/core';
import { NavController ,NavParams, AlertController  } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterPage} from '../register/register';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
 email: string;
 password: string;

  constructor(private alertCtrl: AlertController,private fire: AngularFireAuth,public navCtrl: NavController, private userservice: UserProvider) {
  
  }

  alert(message:string) {
    this.alertCtrl.create({
    	title:'Login',
    	subTitle: message,
    	buttons:['ok']
      
    }).present();
   
  }

  
  SignInUser(){
    console.log(this.email,this.password);
    this.fire.auth.signInWithEmailAndPassword(this.email,this.password).then((success)=>{
      firebase.auth().currentUser.reload();  
       
    if(firebase.auth().currentUser.emailVerified)
    {
      console.log("email verified")
      this.alert('Success,you are logged in.');
    }
    else
    {
      this.alert('Error: Verify your email.')
    }
    console.log(firebase.auth().currentUser);
    })
     
   
  
    //.then((success) => {
  		//this.alert('success,you are logged in');
  		
  		//user logged in

  		//})
  	//.catch( error => {
  		//this.alert(error.message);
      //}) 
      
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
