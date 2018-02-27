import { Company } from './../../models/Company';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class ProfileProvider {
  public userProfile: firebase.database.Reference;
  public currentUser: firebase.User;

  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.currentUser = user;
        this.userProfile = firebase.database().ref(`/profile/${user.uid}`);
      }
    });
  }

  getUserProfile(): firebase.database.Reference {
    return this.userProfile;
  }

  updateName(FirstName: string, LastName: string): Promise<any> {
    return this.userProfile.update({ FirstName, LastName });
  }

  updateDOB(Dob: string): Promise<any> {
    return this.userProfile.update({ Dob });
  }

  updatePhone(Phone: string): Promise<any> {
    return this.userProfile.update({ Phone });
  }

  updateAddress(address: string): Promise<any> {
    return this.userProfile.update({ address });
  }

  updateCompany(Company: string): Promise<any> {
    return this.userProfile.update({ Company });
  }

  updateDesignation(Designation: string): Promise<any> {
    return this.userProfile.update({ Designation });
  }

  updateEmail(newEmail: string, password: string): Promise<any> {
    const credential = firebase.auth.EmailAuthProvider.credential(
      this.currentUser.email,
      password
    );
    return this.currentUser
      .reauthenticateWithCredential(credential)
      .then(user => {
        this.currentUser.updateEmail(newEmail).then(user => {
          this.userProfile.update({ email: newEmail });
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  updatePassword(newPassword: string, oldPassword: string): Promise<any> {
    const credential = firebase.auth.EmailAuthProvider.credential(
      this.currentUser.email,
      oldPassword
    );

    return this.currentUser
      .reauthenticateWithCredential(credential)
      .then(user => {
        this.currentUser.updatePassword(newPassword).then(user => {
          console.log('Password Changed');
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
}
