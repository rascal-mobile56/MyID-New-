import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, } from 'ionic-angular';
import { SureCellEditPage } from '../surecell-edit/surecell-edit';

@Component({
  selector: 'page-surecell',
  templateUrl: 'surecell.html'
})
export class SureCellPage {
  surecellData: any;
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

  createSureCellData(){
    console.log('go AddSureCellPage');
    let profileModal = this.modalCtrl.create(SureCellEditPage, { save: 'save'});
    profileModal.present();
  }

  editSureCellData(){
    console.log('go SureCellEditPage');
    this.navCtrl.push(SureCellEditPage,{ edit:'edit'});
  }

  closePage(){
    this.navCtrl.pop();
  }
}
