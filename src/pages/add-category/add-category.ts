import { Component } from '@angular/core';
import { NavController , ViewController} from 'ionic-angular';

@Component({
  selector: 'page-add-category',
  templateUrl: 'add-category.html'
})
export class AddCategoryPage {

categories: Array<{id:number, name:string, icon:string, show:boolean }>;
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,

  ) {

    this.categories = [
      { id: 0, name: 'Surgeries', icon:'surgeon', show: true },
      { id: 1, name: 'Labs', icon:'test-tube', show: true },
      { id: 2, name: 'Living Will', icon:'document-scroll-2', show: true },
      { id: 3, name: 'DNR', icon:'document-lines', show: true },
      { id: 4, name: 'Family History', icon:'family', show: true },
      { id: 5, name: 'Immunizations', icon:'cloud', show: true },
      { id: 6, name: 'Parmacies', icon:'medical-lit', show: true },
      { id: 7, name: 'SureCell', icon:'pill', show: true },
      { id: 8, name: 'Other Info', icon:'info', show: true },
      { id: 9, name: 'Pregnancy', icon:'baby-stroller', show: true }
    ];
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
