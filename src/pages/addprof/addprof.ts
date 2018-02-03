import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import{Personal} from '../../models/Personal';


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

  

  

this.firedata.child(firebase.auth().currentUser.uid).set(this.personal).then( data => {
      this.alert('Profile Creation started');
      })





}
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddprofPage');
  }


}