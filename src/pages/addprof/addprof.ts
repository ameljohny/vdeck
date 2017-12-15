import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AddprofPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addprof',
  templateUrl: 'addprof.html',
})
export class AddprofPage {


  constructor(private AlertCtrl: AlertController, public navCtrl: NavController) {
  }


alert(message:string){
	this.AlertCtrl.create({
	title: 'Create Profile',
	subTitle: message,
	buttons: ['Ok']
	}).present();
}

saveprofile(){
	this.alert('Profile Creation started');
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddprofPage');
  }

}
