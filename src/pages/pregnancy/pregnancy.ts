import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, } from 'ionic-angular';
import { PregnancyEditPage } from '../pregnancy-edit/pregnancy-edit';

@Component({
  selector: 'page-pregnancy',
  templateUrl: 'pregnancy.html'
})
export class PregnancyPage {

  pregnancyData: any;
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

  createPregnancyData(){
    console.log('go createPregnancyData');
    let profileModal = this.modalCtrl.create(PregnancyEditPage, { save: 'save'});
    profileModal.present();
  }

  editPregnancyData(){
    console.log('go editPregnancyData');
    this.navCtrl.push(PregnancyEditPage,{ edit:'edit'});
  }


  closePage(){
    this.navCtrl.pop();
  }
}
