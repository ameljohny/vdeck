import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the ResetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html',
})
export class ResetpasswordPage {
  email: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userservice: UserProvider) {
  }
  resetpassword(email){
    this.userservice.passwordreset(email);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpasswordPage');
  }

}
