import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, AlertController,  LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-labs-edit',
  templateUrl: 'labs-edit.html'
})
export class LabsEditPage {

  save:string;
  edit:string;
  labsData:any = {};
  type:any;
  constructor(public navCtrl: NavController,
  public viewCtrl: ViewController,
  public navParams: NavParams,
  public alertCtrl: AlertController,
  public loadingCtrl: LoadingController) {
    this.save = navParams.get("save");
    this.edit = navParams.get("edit");
    this.type = [
      { name:'CBC',value: 0},
      { name:'BMP', value: 1},
      { name:'CMP', value: 2},
      { name:'Other', value: 3}
    ];
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
            this.deleteLabsData();
            }
          }
        ]
      });
      alert.present();
  }

  deleteLabsData(){
  }
  updateLabsData(){
  }
  createLabsData(){
  }
  dismiss() {
   this.viewCtrl.dismiss();
  }

}
