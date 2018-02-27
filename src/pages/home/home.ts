import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { userDetailsPage } from '../userDetails/userDetails';
import { ShareProfilePage } from '../share-profile/share-profile';
import { NfcSharePage } from '../nfc-share/nfc-share';
import { AddprofPage } from '../addprof/addprof';
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
  gotoBluetoothle(){
    this.navCtrl.push(ShareProfilePage);
  }
  gotoNFCShare(){
    this.navCtrl.push(NfcSharePage);
  }
  goToAddProfile(){
    this.navCtrl.push(AddprofPage)
  }
  logout() {
    this.fire.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
    console.log("logout clicked");
  }

}
