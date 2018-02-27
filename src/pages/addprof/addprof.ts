//import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import{Personal} from '../../models/Personal';

import { Component } from '@angular/core';


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
  firedata = firebase.database().ref('/profile/');
  personal = {} as Personal
  
  

  


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

  

  

this.firedata.child(firebase.auth().currentUser.uid).set(this.personal).then( data => {
      this.alert('Profile Creation started');
      })





}
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddprofPage');
  }


}