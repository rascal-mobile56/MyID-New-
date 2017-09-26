import { Component } from '@angular/core';
import { NavController, LoadingController,  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserService } from "../../providers/user-service";
import { InboxPage } from '../inbox/inbox';
import { SchedulePage } from '../schedule/schedule';

import { RemindersService } from "../../providers/reminders-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab4Root = InboxPage;

  public profiles: any;
  public id:number;
  public email: string;
  public auth_token: string;
  public reminders: any;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public userService: UserService,
    public remindersService: RemindersService,
  ) {
  }

  ionViewWillEnter() {
    // this.getData();
  }

  getData(){
    let loading = this.loadingCtrl.create();
    loading.present();

    this.remindersService.getForToday()
    .then((res) => {
      this.reminders = res;
      console.log("reminders => ", this.reminders);
      loading.dismiss();
    }, (err) => {
      console.log(err);
      loading.dismiss();
    })
  }

  goInboxPage(){
    console.log('go Inbox Page');
    this.navCtrl.parent.select(3);
  }
  goSchedulePage(){
    console.log('go Schedule Page');
    this.navCtrl.push(SchedulePage);
  }

}
