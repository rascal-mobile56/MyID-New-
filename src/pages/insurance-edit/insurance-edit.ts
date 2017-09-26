import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, AlertController,  LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/Storage';
import { UserService } from "../../providers/user-service";
import { Flags } from "../../providers/flag";

@Component({
  selector: 'page-insurance-edit',
  templateUrl: 'insurance-edit.html'
})
export class InsuranceEditPage {

  save:string;
  edit:string;
  insuranceData:any = {};
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
    if (navParams.get("insuranceData") != null){
        this.insuranceData = navParams.get("insuranceData");
      }
    console.log(this.insuranceData  );
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
            this.deleteInsuranceData();
            }
          }
        ]
      });
      alert.present();
  }

  deleteInsuranceData(){
    let loading = this.loadingCtrl.create();
    var endValue = "/insurance_informations/"+this.insuranceData.id;
    loading.present();
    this.storage.get('email').then(val=>{
      this.email = val;
      this.storage.get('auth_token').then(val=>{
        this.auth_token = val;
        this.userService.dataDelete(this.email, this.auth_token, this.profile_id, endValue)
          .subscribe(
            (data) => {
              loading.dismiss();
              console.log("insuranceinfoData: ", data);
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

  updateInsuranceData(){

    let loading = this.loadingCtrl.create();
    var endValue = "/insurance_informations/"+this.insuranceData.id;
    console.log(this.insuranceData.is_private);
    var body = {"id":this.insuranceData.id, "insurance_information":{
      "insurance_provider":this.insuranceData.insurance_provider, "id_number":this.insuranceData.id_number,
      "group_number":this.insuranceData.group_number, "bin_number":this.insuranceData.bin_number,
      "deductible":this.insuranceData.deductible, "customer_service_phone_number":this.insuranceData.customer_service_phone_number,
      "notes":this.insuranceData.notes, "is_private": this.insuranceData.is_private}}
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
              console.log("Insurance Data: ", data);
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
  createInsuranceData(){

    let loading = this.loadingCtrl.create();
    var endValue = "/insurance_informations";
    console.log(this.insuranceData.is_private);
    var body = {"insurance_information":{
      "insurance_provider":this.insuranceData.insurance_provider, "id_number":this.insuranceData.id_number,
      "group_number":this.insuranceData.group_number, "bin_number":this.insuranceData.bin_number,
      "deductible":this.insuranceData.deductible, "customer_service_phone_number":this.insuranceData.customer_service_phone_number,
      "notes":this.insuranceData.notes, "is_private": this.insuranceData.is_private}}
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
              console.log("Insurance Data: ", data);
              if(data.success == false){
                let alert = this.alertCtrl.create({
                  title: "Error", subTitle: "Create Error", buttons: ['OK']
                });
                alert.present();
                this.navCtrl.pop();
              } else{
                this.flagService.setChangedFlag(true);
                let alert = this.alertCtrl.create({
                  title: "Created", subTitle: "Created Success", buttons: ['OK']
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
