import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

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
  @ViewChild('username') username;
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
  	this.fire.auth.createUserWithEmailAndPassword(this.username.value,this.password.value)
  	.then( data => {
  		this.alert('success,you are registered');
  		this.navCtrl.setRoot( LoggedInPage ) ;
  		//user logged in
  		})
  	.catch(error =>{
  		this.alert(error.message);
  		
  		})
  }

}
