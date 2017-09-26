import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, AlertController,  LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/Storage';
import { UserService } from "../../providers/user-service";
import { Flags } from "../../providers/flag";

@Component({
  selector: 'page-other-edit',
  templateUrl: 'other-edit.html'
})
export class OtherInfoEditPage {

  save:string;
  edit:string;
  otherInfoData:any = {};
  state:any;
  profile_id:any;
  email:string;
  auth_token:string;
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public userService: UserService,
    public storage: Storage,
    private flagService: Flags,
  ) {
    this.save = navParams.get("save");
    this.edit = navParams.get("edit");
    console.log(this.save);
    if (navParams.get("otherInfoData") != null){
        this.otherInfoData = navParams.get("otherInfoData");
      }
    console.log(this.otherInfoData);
    this.profile_id = navParams.get("profile_id");
    this.email = "";
    this.auth_token = "";
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
            this.deleteOtherInfoData();
            }
          }
        ]
      });
      alert.present();
  }

  deleteOtherInfoData(){
    let loading = this.loadingCtrl.create();
    var endValue = "/other_informations/"+this.otherInfoData.id;
    loading.present();
    this.storage.get('email').then(val=>{
      this.email = val;
      this.storage.get('auth_token').then(val=>{
        this.auth_token = val;
        this.userService.dataDelete(this.email, this.auth_token, this.profile_id, endValue)
          .subscribe(
            (data) => {
              loading.dismiss();
              console.log("otherInfoData Data: ", data);
              if(data.success == false){
                let alert = this.alertCtrl.create({
                  title: "Error", subTitle: "Delete Error", buttons: ['OK']
                });
                alert.present();
                this.navCtrl.pop();
              } else{
                this.flagService.setChangedFlag(true);
                let alert = this.alertCtrl.create({
                  title: "Deleted", subTitle: "Delete Success", buttons: ['OK']
                });
                alert.present();
                console.log(data);
                this.navCtrl.pop();

              }
          });
      });
    });
  }
  updateOtherInfoData(){

    let loading = this.loadingCtrl.create();
    var endValue = "/other_informations/"+this.otherInfoData.id;
    console.log(this.otherInfoData.is_private.toString());
    var body = {"id":this.otherInfoData.id, "allergy":{ "name": this.otherInfoData.name, "notes":this.otherInfoData.notes, "is_private": this.otherInfoData}}
    console.log(body);
    loading.present();
    this.storage.get('email').then(val=>{
      this.email = val;
      this.storage.get('auth_token').then(val=>{
        this.auth_token = val;
        this.userService.dataUpdate(this.email, this.auth_token, this.profile_id, endValue, body)
          .subscribe(
            (data) => {
              loading.dismiss();
              console.log("OtherInfo Data: ", data);
              if(data.success == false){
                let alert = this.alertCtrl.create({
                  title: "Error", subTitle: "Updated Error", buttons: ['OK']
                });
                alert.present();
                this.navCtrl.pop();
              } else{
                this.flagService.setChangedFlag(true);
                let alert = this.alertCtrl.create({
                  title: "Updated", subTitle: "Updated Success", buttons: ['OK']
                });
                alert.present();
                this.navCtrl.pop();
                console.log(data);
              }
          });
      });
    });
  }

  createOtherInfoData(){
    let loading = this.loadingCtrl.create();
    var endValue = "/other_informations";
    var body = {"other_information":{ "label": this.otherInfoData.label,
    "notes":this.otherInfoData.notes, "is_private": this.otherInfoData.is_private}}
    console.log(body);
    loading.present();
    this.storage.get('email').then(val=>{
      this.email = val;
      this.storage.get('auth_token').then(val=>{
        this.auth_token = val;
        this.userService.dataCreate(this.email, this.auth_token, this.profile_id, endValue, body)
          .subscribe(
            (data) => {
              loading.dismiss();
              console.log("OtherInformation Data: ", data);
              if(data.success == false){
                let alert = this.alertCtrl.create({
                  title: "Error", subTitle: "Create Error", buttons: ['OK']
                });
                alert.present();
              } else{
                this.flagService.setChangedFlag(true);
                let alert = this.alertCtrl.create({
                  title: "Created", subTitle: "Create Success", buttons: ['OK']
                });
                alert.present();
                this.navCtrl.pop();
                console.log(data);
              }
          });
      });
    });
  }


  dismiss() {
     this.viewCtrl.dismiss();
   }

}
