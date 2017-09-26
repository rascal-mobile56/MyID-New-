import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, } from 'ionic-angular';
import { ImmunizationsEditPage } from '../immunizations-edit/immunizations-edit';

@Component({
  selector: 'page-immunizations',
  templateUrl: 'immunizations.html'
})
export class ImmunizationsPage {

  ImmunizationsData: any;
  personData:any={};
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

  createImmunizationsData(){
    console.log('go createImmunizationsData');
    let profileModal = this.modalCtrl.create(ImmunizationsEditPage, { save: 'save', profile_id: this.profile_id});
    profileModal.present();
  }

  editImmunizationsData(){
    console.log('go editImmunizationsData');
    this.navCtrl.push(ImmunizationsEditPage,{ edit:'edit'});
  }

  closePage(){
    this.navCtrl.pop();
  }
}
