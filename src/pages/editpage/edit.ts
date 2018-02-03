import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import{Personal} from '../../models/Personal';
import { LoginPage} from '../login/login'

@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html'
})
export class EditPage {

firedata = firebase.database().ref('/profile/');
firstname : string;
   lastname : string;
   dob:string;
   company:string;
   designation:string;
   phone:string;
   email:string;
 database=firebase.database();
 user = firebase.auth().currentUser;
 userId = firebase.auth().currentUser.uid;
 personal = {} as Personal
 

	 constructor(private AlertCtrl: AlertController, private afAuth:AngularFireAuth ,private afDatabase:AngularFireDatabase, public navCtrl: NavController) {
}

alert(message:string){
  this.AlertCtrl.create({
  title: 'Edit Profile',
  subTitle: message,
  buttons: ['Ok']
  }).present();
}




editmyprofile(){

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


       

    }).catch((err) => {
      reject(err);
      })
    })




this.firedata.child(firebase.auth().currentUser.uid).update(this.personal).then( data => {
      this.alert('Profile Editing started');
      })


    return promise;

}



}