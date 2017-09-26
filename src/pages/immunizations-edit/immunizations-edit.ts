import { Component } from '@angular/core';
import { NavController, ViewController, NavParams, AlertController,  LoadingController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/Storage';
import { UserService } from "../../providers/user-service";
@Component({
  selector: 'page-immunizations-edit',
  templateUrl: 'immunizations-edit.html'
})
export class ImmunizationsEditPage {

  physicianData: any;
  profile_id:string;
  save:string;
  edit:string;
  immunizationsData:any={};
  doseData:any = {title: 'Dose', dose_name:'', holder:'Dose Name'};
  array_item:any=[{title: 'Dose', dose_name: ''}];
  vaccineList:any;
  email:string;
  auth_token:string;
  constructor(public navCtrl: NavController,
  public viewCtrl: ViewController,
  public navParams: NavParams,
  public alertCtrl: AlertController,
  public loadingCtrl: LoadingController,
  public userService: UserService,
  public storage: Storage,
  ) {
    this.save = navParams.get("save");
    this.edit = navParams.get("edit");
    this.profile_id = navParams.get("profile_id");
    this.email = "";
    this.auth_token = "";

    this.vaccineList = [
      { name:'Hepatitis B1 (HepB)', value:0},
      { name:'Rotavirus (RV1)', value:1},
      { name:'Rotavirus (RV5)', value:2},
      { name:'Diphtheria, tetanus, & acellular pertussis (DTaP)', value:3},
      { name:'Haemophilus influenzae type b (Hib)', value:4},
      { name:'Pneumococcal conjugate (PCV13)', value:5},
      { name:'Inactivated poliovirus', value:6},
      { name:'Influenza (IIV)', value:7},
      { name:'Measles, mumps, rubella8 (MMR)', value:8},
      { name:'Varicella (VAR)', value:9},
      { name:'Hepatitis A (HepA)', value:10},
      { name:'Meningococcal', value:11},
      { name:'Tetanus, diphtheria, & acellular pertussis', value:12},
      { name:'Human papillomavirus (HPV)', value:13},
      { name:'Meningococcal B', value:13},
      { name:'Pneumococcal polysaccharide (PPSV23)', value:14},
      { name:'Other', value:15},
    ]
  }


  ionViewDidEnter(){
      this.gettingdata();
  }

  gettingdata(){
    let loading = this.loadingCtrl.create();
    var endValue = "/physicians"
    loading.present();
    this.storage.get('email').then(val=>{
      this.email = val;
      this.storage.get('auth_token').then(val=>{
        this.auth_token = val;
        this.userService.dataGet(this.email, this.auth_token, this.profile_id, endValue)
          .subscribe(
            (data) => {
              loading.dismiss();
              if(data.success == false){
                let alert = this.alertCtrl.create({
                  title: "Error", subTitle: "Get Data Error", buttons: ['OK']
                });
                alert.present();
                this.navCtrl.pop();
              } else{

                this.physicianData = data.physicians;
                console.log("Physicians Data", this.physicianData);
              }
          });
      });
    });
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
            this.deleteImmunizationsData();
            }
          }
        ]
      });
      alert.present();
  }

  addDose(){
    this.array_item.push(this.doseData);
  }

  deleteImmunizationsData(){
  }
  updateImmunizationsData(){
  }
  createImmunizationsData(){
  }
  dismiss() {
   this.viewCtrl.dismiss();
  }
}
