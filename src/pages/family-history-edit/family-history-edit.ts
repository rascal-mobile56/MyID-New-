import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, AlertController,  LoadingController  } from 'ionic-angular';

@Component({
  selector: 'page-family-history-edit',
  templateUrl: 'family-history-edit.html'
})
export class FamilyHistoryEditPage {

  save:string;
  edit:string;
  familyHistoryData:any = {};
  state:any;
  relationship:any;
  constructor(public navCtrl: NavController,
  public viewCtrl: ViewController,
  public navParams: NavParams,
  public alertCtrl: AlertController,
  public loadingCtrl: LoadingController) {
    this.save = navParams.get("save");
    this.edit = navParams.get("edit");
    this.state = [
      { name:'Deceased',value_string: true},
      { name:'Living', value_string: false} ];
    this.relationship = [
      { name:'Brother', value: 0},
      { name:'Sister', value: 1},
      { name:'Mother', value: 2 },
      { name:'Father', value: 3},
      { name:'Aunt', value: 4},
      { name:'Uncle', value: 5},
      { name:'Grandfather', value:6 },
      { name:'Grandmother', value: 7},
      { name:'Other', value: 8}
    ]
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
            this.deleteFamilyHistoryData();
            }
          }
        ]
      });
      alert.present();
  }

  deleteFamilyHistoryData(){
  }
  updateFamilyHistoryData(){
  }
  createFamilyHistoryData(){
  }
  dismiss() {
   this.viewCtrl.dismiss();
  }

}
