import { Component } from '@angular/core';
import { NavController, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { UserService } from "../../providers/user-service";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  public validEmail:boolean = false;

  public user: any = {email:'', password: '', confirm_pw:''};
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public userService: UserService,
    public storage: Storage,
  ) {

  }

  validEmailAddress(){
    this.validEmail = this.ValidationEmail(this.user.email);
  }

  ValidationEmail (email){
      let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }

  doSignup(){

    let val_email = this.ValidationEmail(this.user.email);
    console.log(val_email);

    if(this.user.email == '' || !this.user.email){
     let alert = this.alertCtrl.create({
      title: "Alert", subTitle: "Please enter Email", buttons: ['OK'] });
      alert.present();
   }else if(val_email == false){
     let alert = this.alertCtrl.create({
      title: "Email Validation Failed", subTitle: "Email is invalid", buttons: ['OK'] });
      alert.present();
   }else if( this.user.password == '' || !this.user.password || this.user.confirm_pw == '' || !this.user.confirm_pw)
   {
     let alert = this.alertCtrl.create({
      title: "Alert", subTitle: "Please enter Password", buttons: ['OK'] });
      alert.present();
   } else if(this.user.password != this.user.confirm_pw)
   {
     let alert = this.alertCtrl.create({
      title: "Alert", subTitle: "Password doesn't match confirmation", buttons: ['OK'] });
      alert.present();
   } else if(this.user.password.length < 6)
   {
     let alert = this.alertCtrl.create({
      title: "Alert", subTitle: "Password is to short (minimum of 6 characters)", buttons: ['OK'] });
      alert.present();
   } else{

     this.registerUser(this.user.email, this.user.password, this.user.confirm_pw);

   }
  }
  registerUser(email, password, confirm_pw){
    console.log('Email ' + email + 'Password ' + password);
    console.log("go MainPage");
    let loading = this.loadingCtrl.create();
    loading.present();
    this.userService.signup(email, password, confirm_pw )
      .subscribe(
        (data) => {
          loading.dismiss();
          console.log("Signup Data:", data);

          if(data.success == false && data.error_code == "0102" ){
            let alert = this.alertCtrl.create({
              title: "Error", subTitle: "Email has already been taken", buttons: ['OK']
            });
            alert.present();
          }else if(data.success == false){
            let alert = this.alertCtrl.create({
              title: "Error", subTitle: "Signup Error", buttons: ['OK']
            });
            alert.present();
            this.navCtrl.pop();
          } else{
            this.storage.set('data', data);
            this.storage.set('email', data.user.email);
            this.storage.set('auth_token', data.user.authentication_token);
            this.navCtrl.setRoot(TabsPage);
          }
        },
        (data) => {
          loading.dismiss();
          console.log("SignupError");
          let alert = this.alertCtrl.create({
            title: "Error", subTitle: "Signup Error", buttons: ['OK']
          });
          alert.present();
          this.navCtrl.pop();
        });
  }


}
