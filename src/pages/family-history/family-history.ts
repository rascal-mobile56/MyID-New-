import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, } from 'ionic-angular';
import { FamilyHistoryEditPage } from '../family-history-edit/family-history-edit';
@Component({
  selector: 'page-family-history',
  templateUrl: 'family-history.html'
})
export class FamilyHistoryPage {

  familyHistoryData: any;
  personData:any;
  profile_id:any;
  imagePath:any;
  personName:any;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams
  ) {
    this.profile_id = navParams.get("profile_id");
    this.personData = navParams.get("personData");
    this.imagePath =  this.personData.image_url.thumb;
    this.personName = this.personData.last_name;
    console.log('personData', this.personData);
  }

  createFamilyHistoryData(){
    console.log('go FamilyHistoryDataPg');
    let profileModal = this.modalCtrl.create(FamilyHistoryEditPage, { save: 'save'});
    profileModal.present();
  }

  editFamilyHistoryData(){
    console.log('go FamilyHistoryDataPg');
    this.navCtrl.push(FamilyHistoryEditPage,{ edit:'edit'});
  }


  closePage(){
    this.navCtrl.pop();
  }
}
