import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-living-will',
  templateUrl: 'living-will.html'
})
export class LivingWillPage {

  constructor(public navCtrl: NavController) {

  }

  closePage(){
    this.navCtrl.pop();
  }

}
