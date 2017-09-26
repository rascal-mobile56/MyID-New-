import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { PharmaciesEditPage } from '../pharmacies-edit/pharmacies-edit';
@Component({
  selector: 'page-pharmacies',
  templateUrl: 'pharmacies.html'
})
export class PharmaciesPage {
  pharmaciesData: any;
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
  createPharmaciesData(){
    console.log('go PharmaciesEditPage');
    let profileModal = this.modalCtrl.create(PharmaciesEditPage, { save: 'save'});
    profileModal.present();
  }

  editPharmaciesData(){
    console.log('go PharmaciesEditPage');
    this.navCtrl.push(PharmaciesEditPage,{ edit:'edit'});
  }

  closePage(){
    this.navCtrl.pop();
  }

}
