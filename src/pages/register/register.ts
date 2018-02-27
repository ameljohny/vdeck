import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AngularFireAuth   } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { ValidatorFn } from '@angular/forms/src/directives/validators';
import { AbstractControl } from '@angular/forms/src/model';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage implements OnInit {
  newuser: FormGroup;

  //@ViewChild('password') password1;

   alert(message:string) {
    this.alertCtrl.create({
    	title:'Registration',
    	subTitle: message,
    	buttons:['ok']
      
    }).present();
}

  constructor(private alertCtrl: AlertController,private fire:AngularFireAuth ,public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log(this.newuser.controls.email);
    console.log('ionViewDidLoad RegisterPage');
  }

  ngOnInit() {
    this.newuser=new FormGroup({
      email: new FormControl('',[Validators.required,]),
      password: new FormControl('',[Validators.required]),
      re_password: new FormControl('',[Validators.required,this.equalto('password')])
    });
  }


  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
    
    let input = control.value;
    
    let isValid=control.root.value[field_name]==input
    if(!isValid)
    return { 'equalTo': {isValid} }
    else
    return null;
    };
    }
 
  registerUser(newuser){
  	this.fire.auth.createUserWithEmailAndPassword(newuser.controls.email.value,newuser.controls.password.value)
  	.then( (success) => {
      let user:any = firebase.auth().currentUser;
      user.sendEmailVerification().then(
        (success) => {console.log("please verify your email")
        console.log(user.IsEmailVerified)}  // displays the boolean value for verification
        
      ).catch(
        (err) => {
          // this.error = err;
          console.log("error in verification");
        }
      )

   }).catch(
     (err) => {
      //  this.error = err;
      console.log("error in Signup");
     })
  }

}
