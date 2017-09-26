import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { LabsEditPage } from '../labs-edit/labs-edit';

@Component({
  selector: 'page-labs',
  templateUrl: 'labs.html'
})
export class LabsPage {
  labsData: any;
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
  createLabsData(){
    console.log('go SurgeriesCreatePage');
    let profileModal = this.modalCtrl.create(LabsEditPage, { save: 'save'});
    profileModal.present();
  }

  editLabsData(){
    console.log('go SurgeriesEditPage');
    this.navCtrl.push(LabsEditPage,{ edit:'edit'});
  }
  closePage(){
    this.navCtrl.pop();
  }
}
