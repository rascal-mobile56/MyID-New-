import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, AlertController,  LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserService } from "../../providers/user-service";
import { Flags } from "../../providers/flag";

@Component({
  selector: 'page-emergency-edit',
  templateUrl: 'emergency-edit.html'
})
export class EmergencyEditPage {

  public save:string;
  public edit:string;
  emergencyData:any = {name:'', relationship:'', phone_number:'', alt_phone_number:'', email:''};
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
    private flagService: Flags
  ) {
      this.save = navParams.get("save");
      this.edit = navParams.get("edit");
      console.log(this.save);
      if (navParams.get("emergencyData") != null){
          this.emergencyData = navParams.get("emergencyData");
          console.log(this.emergencyData);
      }

      this.profile_id = navParams.get("profile_id");
      this.email = "";
      this.auth_token = "";
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
              this.deleteEmergencyData();
              }
            }
          ]
        });
        alert.present();
    }

    deleteEmergencyData(){
      let loading = this.loadingCtrl.create();
      let endValue = "/emergency_contacts/"+this.emergencyData.id;
      loading.present();
      this.storage.get('email').then(val=>{
        this.email = val;
        this.storage.get('auth_token').then(val=>{
          this.auth_token = val;
          this.userService.dataDelete(this.email, this.auth_token, this.profile_id, endValue)
            .subscribe(
              (data) => {
                loading.dismiss();
                console.log("EmergencyData: ", data);
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
                  this.navCtrl.pop();
                  console.log(data);
                }
            });
        });
      });
    }

    emergencyDataUpdate(){
        let loading = this.loadingCtrl.create();
        let endValue = "/emergency_contacts/"+this.emergencyData.id;
        let body = {"id":this.emergencyData.id, "emergency_contact":
                        { "name": this.emergencyData.name, "relationship":this.emergencyData.relationship,
                         "phone_number": this.emergencyData.phone_number,"alt_phone_number":this.emergencyData.alt_phone_number,
                          "email":this.emergencyData.email }
                        };
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
                    console.log("Emergency Data: ", data);
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

  emergencyDataCreate(){
    let loading = this.loadingCtrl.create();
    var endValue = "/emergency_contacts";
    var body = {"emergency_contact":
    { "name": this.emergencyData.name, "relationship":this.emergencyData.relationship,
     "phone_number": this.emergencyData.phone_number,"alt_phone_number":this.emergencyData.alt_phone_number,
      "email":this.emergencyData.email }
    }
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
              console.log("Vital Data: ", data);
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
