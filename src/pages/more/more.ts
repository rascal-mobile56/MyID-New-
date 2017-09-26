import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { AddDependentPage } from '../add-dependent/add-dependent';
import { ManageSharingPage } from '../manage-sharing/manage-sharing';
import { LinkNewPage } from '../link-new/link-new';

@Component({
  selector: 'page-more',
  templateUrl: 'more.html'
})
export class MorePage {

  constructor(
  public navCtrl: NavController,
  public modalCtrl: ModalController) {
  }


  goAddDependentPage(){
    console.log('go AddDependent Page');
    let profileModal = this.modalCtrl.create(AddDependentPage);
    profileModal.present();
  }

  goManageSharingPage(){
    console.log('go ManageSharing Page');
    this.navCtrl.push(ManageSharingPage);
  }

  goLinkNewPage(){
    console.log('go LinkNew Page');
    let profileModal = this.modalCtrl.create(LinkNewPage);
    profileModal.present();
  }


  goSettingsPage(){
    console.log('go SettingsPage');
    this.navCtrl.push(SettingsPage);
  }

}
