import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, NavParams} from 'ionic-angular';
import { MedicationsEditPage } from '../medications-edit/medications-edit';
import { AddMedicationPage } from '../add-medication/add-medication';
import { EditMedicationPage } from '../edit-medication/edit-medication';
import { Storage } from '@ionic/storage';
import { DependentService } from "../../providers/dependent-service";
import { RemindersService } from '../../providers/reminders-service';
import { BaseMedicineService } from "../../providers/base-medicine-service";
import { UserService } from "../../providers/user-service";

@Component({
  selector: 'page-medications',
  templateUrl: 'medications.html'
})
export class MedicationsPage {

  person: any = [];
  profile_id:any;
  reminderData:any;
  loaded: any;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public dependentService: DependentService,
    public baseMedicineService: BaseMedicineService,
    public remindersService: RemindersService,
    public userService: UserService,
    public storage: Storage,
    public loadingCtrl: LoadingController
  ) {
    this.profile_id = navParams.get("profile_id");
    console.log('person_id', this.profile_id )
    this.loaded = false;
  }

  ionViewWillEnter() {
    console.log('* Here is Select Medication Page *');
    // this.persons = this.dependentService.getAll();
    this.getDatas();
  }

  getDatas() {

    let loading = this.loadingCtrl.create();
    loading.present();

      this.remindersService.getForDependent(this.profile_id)
      .then((res) => {

         loading.dismiss();
         this.reminderData = res;
         console.log(this.reminderData)
         this.loaded = true;

         this.reminderData.forEach((item) => {
           this.baseMedicineService.getForm(item.form_Id)
           .then((res) => {
             item.form = res;
             console.log('reminderForm', res);
           }, (err) => {
             console.log(err);
             loading.dismiss();
           });

           this.baseMedicineService.getColor(item.color1_Id)
           .then((res) => {
             item.color1 = res;
             console.log('reminderColor1', res);
           }, (err) => {
             console.log(err);
             loading.dismiss();
           });

           this.baseMedicineService.getColor(item.color2_Id)
           .then((res) => {
             item.color2 = res;
             console.log('reminderColor2', res);
           }, (err) => {
             console.log(err);
             loading.dismiss();
           });
         })
      }, (err) => {
        console.log(err);
        loading.dismiss();
      })


  }

  createMedicationsData(){
    let profileModal = this.modalCtrl.create(AddMedicationPage, { id: this.profile_id});
    profileModal.onDidDismiss(() => {
      this.getDatas();
    });
    profileModal.present();
  }

  editMedicationsData(event, reminderData){
    let editModal = this.modalCtrl.create(EditMedicationPage, { id: reminderData.id});
    editModal.onDidDismiss(() => {
      this.getDatas();
    });
    editModal.present();
  }


  closePage(){
    this.navCtrl.pop();
  }

}
