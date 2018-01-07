import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';

import{Personal} from '../../models/Personal';
import{Company} from '../../models/Company';

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

  personal = {} as Personal
  company = {} as Company

  myInput


  constructor(private AlertCtrl: AlertController, private afAuth:AngularFireAuth ,private afDatabase:AngularFireDatabase, public navCtrl: NavController) {
  

  
  




}

alert(message:string){
  this.AlertCtrl.create({
  title: 'Create Profile',
  subTitle: message,
  buttons: ['Ok']
  }).present();
}

saveprofile(){

  

  

this.afDatabase.list('profile/profiledata/personal').push(this.personal).then( data => {
      this.alert('Profile Creation started');
      })


this.afDatabase.list('profile/profiledata/company').push(this.company)


}
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddprofPage');
  }


}