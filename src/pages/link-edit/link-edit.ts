import { Component } from '@angular/core';
import { NavController, Platform, ModalController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ProductSuccessPage } from '../product-success/product-success'

@Component({
  selector: 'page-link-edit',
  templateUrl: 'link-edit.html'
})
export class LinkEditPage {

  barcode: string;
	valueForEncoding: any;
	encodedResult: any;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public modalCtrl: ModalController,
    private barcodeScanner: BarcodeScanner
  ) {
    this.platform = platform;
		this.barcode = '[empty]';
  }

  scan() {

		let options = {
			'preferFrontCamera': false,
			'prompt': 'Place a barcode inside the scan area',
			'orientation': 'portrait'
		};
		this.barcodeScanner.scan(options).then((result) => {

      console.log(result);
      this.goProductSuccessPage();

		}, (err) => {
			alert(err);
		});
	}

  goProductSuccessPage(){
    console.log('go LinkNew Page');
    let profileModal = this.modalCtrl.create(ProductSuccessPage, { page: 'likeEdit' });
    profileModal.present();
  }

  cancel(){
    this.navCtrl.pop();
  }


}
