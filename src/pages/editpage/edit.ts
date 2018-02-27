



import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';


import { AngularFireModule } from 'angularfire2';
import { Component } from '@angular/core';
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
   addr:string;
 database=firebase.database();
 user = firebase.auth().currentUser;
 userId = firebase.auth().currentUser.uid;
 personal = {} as Personal
 


	 constructor(private AlertCtrl: AlertController, private afAuth:AngularFireAuth ,private afDatabase:AngularFireDatabase, public navCtrl: NavController) {





    var promise = new Promise((resolve, reject) => {
      this.firedata.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
        resolve(snapshot.val());
        var userdefault = snapshot.val();
        console.log(firebase.auth().currentUser.uid)
         console.log(userdefault.Firstname);
         this.firstname = userdefault.Firstname;
         this.lastname= userdefault.Lastname;
         this.dob=userdefault.Dob;
         this.company=userdefault.Company;
         this.designation=userdefault.Designation;
         this.phone=userdefault.Phone;
         this.email=userdefault.email;
          this.addr=userdefault.Address;
  
  
         
  
      }).catch((err) => {
        reject(err);
        })
      })
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
       this.addr=user.address;
       console.log(this.addr);


       this.personal.Firstname = user.Firstname;
       this.personal.Lastname= user.Lastname;
       this.personal.Dob=user.Dob;
       this.personal.Company=user.Company;
       this.personal.Designation=user.Designation;
       this.personal.Phone=user.Phone;
       this.personal.email=user.email;

       this.personal.Address=user.address;


       

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