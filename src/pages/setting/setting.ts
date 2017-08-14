import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
  ) {

  }
  logOut(){
      this.storage.set('data', null);
      this.storage.set('email', "");
      this.storage.set('auth_token', "");
      this.navCtrl.setRoot(MainPage);
    }
}
