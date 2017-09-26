import { Component } from '@angular/core';
import { NavController, ViewController, ModalController, NavParams} from 'ionic-angular';
import { ProductSuccessPage } from '../product-success/product-success'

@Component({
  selector: 'page-explain-slide',
  templateUrl: 'explain-slide.html'
})
export class ExplainSlidePage {

  sliders: Array<{image:string, title:string, description:string }>;
  public profile_img:string;
  public name:string;
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public navParams: NavParams
  ) {
    this.sliders = [{ image: 'image1', title:'Pill Reminders', description:'Receive pill reminders to make sure you stay on top of your health.' },
                    { image: 'image2', title:'Document Storage', description: 'Attach important documents to your profile for quick access any time, anywhere.'},
                    { image: 'image3', title:'Sharing', description: 'Share your health imformant with your Doctor or caregiver safely and securely.'},
                    { image: 'image4', title:'Quick Notify ICE Contacts', description: 'Display a red button on your profile to automatically send a text & email to your emergency contacts.'},
                  ];
  let personData =  navParams.get("personData");
  console.log('profile_img',personData);
  this.profile_img = personData.image_url.thumb;
  this.name = personData.first_name + ' ' + personData.last_name;
  
  }

  productSuccess(){
    console.log('go ProductSuccess Page');
    let profileModal = this.modalCtrl.create(ProductSuccessPage, { page: 'document'});
    profileModal.present();
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
