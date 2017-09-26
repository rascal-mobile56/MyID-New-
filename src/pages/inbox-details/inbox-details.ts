import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-inbox-details',
  templateUrl: 'inbox-details.html'
})
export class InboxDetailsPage {

  items:any;
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams
    ) {
      this.items = navParams.get('data');
      console.log(this.items);
  }


  dismiss(){
     this.viewCtrl.dismiss();
  }
}
