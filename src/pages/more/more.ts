import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingPage } from '../setting/setting';

@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {

  items: Array<{name:string, icon:string}>;
  constructor(public navCtrl: NavController) {

    this.items = [{ name: 'Communication', icon:'sharing'}, { name: 'Manage Sharing', icon: 'sharing'},
                  { name: 'Link a Product', icon:'sharing'}];
  }

  goSettingPage(){
    console.log('go SettingPage');
    this.navCtrl.push(SettingPage);
  }

}
