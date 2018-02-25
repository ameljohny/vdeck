import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
//import {AngularFireDatabase} from 'angularfire2/database';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { LoginPage} from '../login/login';
import { EditPage} from '../editpage/edit';

import{Personal} from '../../models/Personal';




//@IonicPage()
@Component({
  selector: 'page-userDetails',
  templateUrl: 'userDetails.html',

})


export class userDetailsPage {
   firedata = firebase.database().ref('/profile/');
   firstname : string;
   lastname : string;
   dob:string;
   company:string;
   designation:string;
   phone:string;
   email:string;
   addr:string;
 database=firebase.database();
 user = firebase.auth().currentUser;
 userId = firebase.auth().currentUser.uid;



constructor(private AlertCtrl: AlertController, private afAuth:AngularFireAuth ,private afDatabase:AngularFireDatabase, public navCtrl: NavController) {

    this.getuserdetails();

  }

alert(message:string){
  this.AlertCtrl.create({
  title: 'Viewed name',
  subTitle: message,
  buttons: ['Ok']
  }).present();

}

getuserdetails() {
    var promise = new Promise((resolve, reject) => {
    this.firedata.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
      resolve(snapshot.val());
      var user = snapshot.val();
      console.log(firebase.auth().currentUser.uid)
       console.log(user.Firstname);
       this.firstname = user.Firstname;
       this.lastname= user.Lastname;
       this.dob=user.Dob;
       this.company=user.Company;
       this.designation=user.Designation;
       this.phone=user.Phone;
       this.email=user.email;
       this.addr=user.address;
      console.log(this.addr);

       

    }).catch((err) => {
      reject(err);
      })
    })
    return promise;

  }

navigateTo(){

  this.navCtrl.push(LoginPage);

  this.navCtrl.setRoot(LoginPage);

}

editprofile()
{

this.navCtrl.push(EditPage);


}

 ionViewDidLoad() {


    console.log(firebase.auth().currentUser.uid);
    console.log('ionViewDidLoad userDetailsPage');
  }
}
