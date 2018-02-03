import { ProfileKey } from './../../models/ProfileKey';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';

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

  

  constructor(private AlertCtrl: AlertController, private afAuth:AngularFireAuth ,private afDatabase:AngularFireDatabase, public navCtrl: NavController) {
  
    var user = firebase.auth().currentUser;
    var userEmail = user.email;
    console.log(user.email);
    console.log(user.uid);
    

 

}

alert(message:string){
  this.AlertCtrl.create({
  title: 'Create Profile',
  subTitle: message,
  buttons: ['Ok']
  }).present();
}

saveprofile(){

  

  var userID = firebase.auth().currentUser.uid;   

// this.afDatabase.list('profile/profiledata/' + userID + '/profilekey').push(this.profilekey).then( data => {
//       this.alert('ProfileKey Creation started');
//       })
// this.afDatabase.list('profile/profiledata/' + userID + '/userinfo').push(this.personal).then( data => {
//   this.alert('UserInfo Creation started');
//   })

// this.afDatabase.list('profile/profiledata/' + userID + '/workinfo').push(this.company).then( data => {
//   this.alert('WorkInfo Creation started');
//   })


}
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddprofPage');
  }


}