import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, Alert } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
//import {AngularFireDatabase} from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { LoginPage} from '../login/login';
import { EditPage} from '../editpage/edit';
import { AuthProvider } from '../../providers/auth/auth';
import { ProfileProvider } from '../../providers/profile/profile';

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





  //  firedata = firebase.database().ref('/profile/');
//    firstname : string;
//    lastname : string;
//    dob:string;
//    company:string;
//    designation:string;
//    phone:string;
//    email:string;
//  database=firebase.database();
//  user = firebase.auth().currentUser;
//  userId = firebase.auth().currentUser.uid;
 public userProfile: any;
 public Dob: string;

constructor(private alertCtrl: AlertController,
   private afAuth:AngularFireAuth ,
   private afDatabase:AngularFireDatabase,
    public navCtrl: NavController,
    public authProvider: AuthProvider,
    public profileProvider: ProfileProvider,
  ) 
  {
    // this.getuserdetails();

  }

alert(message:string){
  this.alertCtrl.create({
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

// getuserdetails() {
//     var promise = new Promise((resolve, reject) => {
//     this.firedata.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
//       resolve(snapshot.val());
//       var user = snapshot.val();
//       console.log(firebase.auth().currentUser.uid)
//        console.log(user.Firstname);
//        this.firstname = user.Firstname;
//        this.lastname= user.Lastname;
//        this.dob=user.Dob;
//        this.company=user.Company;
//        this.designation=user.Designation;
//        this.phone=user.Phone;
//        this.email=user.email;
//     }).catch((err) => {
//       reject(err);
//       })
//     })
//     return promise;

//   }




 ionViewDidLoad() {
  this.profileProvider.getUserProfile().on('value', userProfileSnapshot => {
    this.userProfile = userProfileSnapshot.val();
    console.log(this.userProfile + 'userProfile');
    this.Dob = userProfileSnapshot.val().Dob;
  });
    console.log('ionViewDidLoad userDetailsPage');
    console.log(this.Dob + 'Dob');
  }

  updateName(): void {
    const alert: Alert = this.alertCtrl.create({
      message: 'Your first name & last name',
      inputs: [
        {
          name: 'firstName',
          placeholder: 'Your first name',
          value: this.userProfile.firstName
        },
        {
          name: 'lastName',
          placeholder: 'Your last name',
          value: this.userProfile.lastName
        }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileProvider.updateName(data.firstName, data.lastName);
          }
        }
      ]
    });
    alert.present();
  }

  updateDOB(Dob: string): void {
    this.profileProvider.updateDOB(Dob);
  }

  updateEmail(): void {
    let alert: Alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'newEmail',
          placeholder: 'Your new email'
        },
        {
          name: 'password',
          placeholder: 'Your password',
          type: 'password'
        }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            let newEmail = data.newEmail;

            this.profileProvider
              .updateEmail(data.newEmail, data.password)
              .then(() => {
                console.log('Email Changed Successfully');
              })
              .catch(error => {
                console.log('ERROR: ' + error.message);
              });
          }
        }
      ]
    });
    alert.present();
  }

  updatePassword(): void {
    let alert: Alert = this.alertCtrl.create({
      inputs: [
        {
          name: 'newPassword',
          placeholder: 'Your new password',
          type: 'password'
        },
        {
          name: 'oldPassword',
          placeholder: 'Your old password',
          type: 'password'
        }
      ],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: data => {
            this.profileProvider.updatePassword(
              data.newPassword,
              data.oldPassword
            );
          }
        }
      ]
    });
    alert.present();
  }
}
