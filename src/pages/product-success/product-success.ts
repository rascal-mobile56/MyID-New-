import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import {TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-product-success',
  templateUrl: 'product-success.html'
})
export class ProductSuccessPage {

  public page:any;
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
  ) {
    this.page = navParams.get("page");
  }

  dismiss() {
    console.log('go Profile Page');
    // this.navCtrl.parent.select(ProfilePage);
    this.navCtrl.setRoot(TabsPage);
  }
}
