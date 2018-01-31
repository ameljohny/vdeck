import { Component , ViewChild, ErrorHandler} from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController,IonicErrorHandler } from 'ionic-angular';
import { AngularFireAuth   } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('email') email;
  @ViewChild('password') password;

   alert(message:string) {
    this.alertCtrl.create({
    	title:'Registration',
    	subTitle: message,
    	buttons:['ok']
      
    }).present();
}

  constructor(private alertCtrl: AlertController,private fire:AngularFireAuth ,public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser(){
  	this.fire.auth.createUserWithEmailAndPassword(this.email.value,this.password.value)
  	.then( (success) => {
      let user:any = firebase.auth().currentUser;
      user.sendEmailVerification().then(
        (success) => {console.log("please verify your email")
        console.log(user.IsEmailVerified)} 
        
      ).catch(
        (err) => {
          // this.error = err;
          console.log("error in verification");
        }
      )

   }).catch(
     (err) => {
      //  this.error = err;
      console.log("error in verification");
     })
  }

}
