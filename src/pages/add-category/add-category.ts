import { Component } from '@angular/core';
import { NavController , ViewController, NavParams} from 'ionic-angular';

import { SurgeriesPage } from '../surgeries/surgeries';
import { LabsPage } from '../labs/labs';
import { LivingWillPage } from '../living-will/living-will';
import { DNRPage } from '../dnr/dnr';
import { FamilyHistoryPage } from '../family-history/family-history';
import { ImmunizationsPage } from '../immunizations/immunizations';
import { PharmaciesPage } from '../pharmacies/pharmacies';
import { SureCellPage } from '../surecell/surecell';
import { OtherInfoPage } from '../other-info/other-info';
import { LinkedProductPage } from '../linked-product/linked-product';
import { PregnancyPage } from '../pregnancy/pregnancy';

@Component({
  selector: 'page-add-category',
  templateUrl: 'add-category.html'
})
export class AddCategoryPage {

categories: Array<{id:number, name:string, page:any, icon:string, show:boolean, sup:string}>;

public addedCategories: Array<any>;
constructor(
  public navCtrl: NavController,
  public viewCtrl: ViewController,
  private navParams: NavParams

) {

  this.addedCategories = this.navParams.get("ids");

  this.categories = [
    { id: 8, name: 'Surgeries', page: SurgeriesPage,icon:'surgeon', show: true, sup:''  },
    { id: 9, name: 'Labs', page: LabsPage, icon:'test-tube', show: true, sup:''  },
    { id: 10, name: 'Living Will', page: LivingWillPage, icon:'document-scroll-2', show: true, sup:''  },
    { id: 11, name: 'DNR', page: DNRPage,icon:'document-lines', show: true, sup:''  },
    { id: 12, name: 'Family History', page: FamilyHistoryPage, icon:'family', show: true, sup:''  },
    { id: 13, name: 'Immunizations', page: ImmunizationsPage, icon:'syringe', show: true, sup:''  },
    { id: 14, name: 'Parmacies', page: PharmaciesPage, icon:'medical-kit', show: true, sup:''  },
    { id: 15, name: 'SureCell', page: SureCellPage, icon:'atom', show: true, sup:'TM'  },
    { id: 17, name: 'Other Info', page: OtherInfoPage, icon:'info', show: false, sup:''  },
    { id: 16, name: 'Pregnancy', page: PregnancyPage, icon:'baby-stroller', show: true, sup:''  }
  ];

  let that = this;

  this.categories.map((category)=>{
    if(that.addedCategories.indexOf(category.id)>-1 || category.id == 17) {
      category.show = false;
    } else {
      category.show = true;
    }
  })
}

  onClickCategory(category) {
    if(category.show) {
      category.show = false;
      this.viewCtrl.dismiss({category: category});
    }
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
