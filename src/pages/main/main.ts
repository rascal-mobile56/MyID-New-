import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
  ) {

  }

  ionViewWillEnter(){

      // console.log("ResumeSubscription");
      // let profileModal = this.modalCtrl.create(PasscodeSettingPage, {
      //   val: 'background'
      // });
      // this.storage.get('passcode').then(val=>{
      //   if(val == null){
      //     console.log("go on");
      //   } else {
      //     console.log("run passcode page")
      //     profileModal.present();
      //   }
      // });

    this.storage.get('data').then(val=>{
      console.log(val);
      if (val != null && val.success== true){
        console.log("home page");
        this.navCtrl.setRoot(TabsPage);
      }
    });
  }
  goLoginPage(){
    console.log("go LoginPage");
    this.navCtrl.push(LoginPage);
  }
  goSignupPage(){
    console.log("go SignupPage");
    this.navCtrl.push(SignupPage);
  }
}
