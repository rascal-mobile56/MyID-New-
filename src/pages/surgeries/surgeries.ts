import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, } from 'ionic-angular';
import { SurgeriesEditPage } from '../surgeries-edit/surgeries-edit';

@Component({
  selector: 'page-surgeries',
  templateUrl: 'Surgeries.html'
})
export class SurgeriesPage {

  surgeriesData: any;
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

  createSurgeriesData(){
    console.log('go SurgeriesCreatePage');
    let profileModal = this.modalCtrl.create(SurgeriesEditPage, { save: 'save'});
    profileModal.present();
  }

  editSurgeriesData(){
    console.log('go SurgeriesEditPage');
    this.navCtrl.push(SurgeriesEditPage,{ edit:'edit'});
  }

  closePage(){
    this.navCtrl.pop();
  }
}
