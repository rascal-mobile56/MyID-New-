import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, AlertController,  LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-pregnancy-edit',
  templateUrl: 'pregnancy-edit.html'
})
export class PregnancyEditPage {

  save:string;
  edit:string;
  pregnancyData:any = {};
  state:any;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,

  ) {
    this.save = navParams.get("save");
    this.edit = navParams.get("edit");
    this.state = [
      { name:'Private',value_string: 'true'},
      { name:'Public', value_string: 'false'} ];
  }
  deleteAlert(){

    let alert = this.alertCtrl.create({
      title: 'Are you sure?',
      subTitle: 'Do you really want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Buy clicked');
            this.deletePregnancyData();
            }
          }
        ]
      });
      alert.present();
  }

  deletePregnancyData(){
  }
  updatePregnancyData(){
  }
  createPregnancyData(){
  }
  dismiss() {
   this.viewCtrl.dismiss();
  }
}
