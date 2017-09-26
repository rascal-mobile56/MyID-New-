import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, AlertController,  LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/Storage';
import { UserService } from "../../providers/user-service";
import { Flags } from "../../providers/flag";

@Component({
  selector: 'page-physicians-edit',
  templateUrl: 'physicians-edit.html'
})
export class PhysiciansEditPage {

  save:string;
  edit:string;
  physicianData:any = {};
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
    if (navParams.get("physicianData") != null){
        this.physicianData = navParams.get("physicianData");
      }
    console.log(this.physicianData);
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
              this.deletePhysiciansData();
              }
            }
          ]
        });
        alert.present();
    }
    deletePhysiciansData(){
      let loading = this.loadingCtrl.create();
      var endValue = "/physicians/"+this.physicianData.id;
      loading.present();
      this.storage.get('email').then(val=>{
        this.email = val;
        this.storage.get('auth_token').then(val=>{
          this.auth_token = val;
          this.userService.dataDelete(this.email, this.auth_token, this.profile_id, endValue)
            .subscribe(
              (data) => {
                loading.dismiss();
                console.log("PhysiciansData: ", data);
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

    updatePhysiciansData(){
      let loading = this.loadingCtrl.create();
      var endValue = "/physicians/"+this.physicianData.id;
      console.log(this.physicianData.is_private.toString());
      var body = {"id":this.physicianData.id, "physician":{
                  "name":this.physicianData.name, "business_name":this.physicianData.business_name,
                  "title":this.physicianData.title, "address":this.physicianData.address,
                  "city":this.physicianData.city, "state":this.physicianData.state,
                  "country":this.physicianData.country, "phone_number":this.physicianData.phone_number,
                  "zip_code":this.physicianData.zip_code, "is_private":this.physicianData.is_private}}
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
                console.log("Vital Data: ", data);
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

    createPhysiciansData(){
      let loading = this.loadingCtrl.create();
      var endValue = "/physicians";
      var body = { "physician":{
                  "name":this.physicianData.name, "business_name":this.physicianData.business_name,
                  "title":this.physicianData.title, "address":this.physicianData.address,
                  "city":this.physicianData.city, "state":this.physicianData.state,
                  "country":this.physicianData.country, "phone_number":this.physicianData.phone_number,
                  "zip_code":this.physicianData.zip_code, "is_private":this.physicianData.is_private}}
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
                console.log("Physicians Data: ", data);
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
