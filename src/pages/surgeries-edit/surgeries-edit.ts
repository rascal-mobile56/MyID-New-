import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, AlertController,  LoadingController } from 'ionic-angular';
@Component({
  selector: 'page-surgeries-edit',
  templateUrl: 'surgeries-edit.html'
})
export class SurgeriesEditPage {

  save:string;
  edit:string;
  surgeriesData:any = {};
  state:any;
  type:any;

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
      { name:'Resolved',value_string: 'true'},
      { name:'Ongoing', value_string: 'false'}
    ];
    this.type = [
      { name:'Torn ACL',value: 0},
      { name:'Appendectomy', value: 1},
      { name:'other', value: 2}
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
            this.deleteSurgeriesData();
            }
          }
        ]
      });
      alert.present();
  }

  deleteSurgeriesData(){
  }
  updateSurgeriesData(){
  }
  createSurgeriesData(){
  }
  dismiss() {
   this.viewCtrl.dismiss();
 }

}
