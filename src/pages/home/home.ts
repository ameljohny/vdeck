import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { userDetailsPage } from '../userDetails/userDetails';
// import { RegisterPage } from '../pages/register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private fire: AngularFireAuth) {

  }
  goToProfile(){
    this.navCtrl.push(userDetailsPage);
  }
  logout() {
    this.fire.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
    console.log("logout clicked");
  }

}
