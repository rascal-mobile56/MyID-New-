import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { PersonalInfoPage } from '../personal-info/personal-info';
import { VitalMedicalPage } from '../vital-medical/vital-medical';
import { EmergencyPage } from '../emergency/emergency';
import { AllergiesPage } from '../allergies/allergies';
import { MedicationsPage } from '../medications/medications';
import { PhysiciansPage } from '../physicians/physicians';
import { InsuranceInfoPage } from '../insurance-info/insurance-info';
import { SurgeriesPage } from '../surgeries/surgeries';
import { LabsPage } from '../labs/labs';
import { LivingWillPage } from '../living-will/living-will';
import { DNRPage } from '../dnr/dnr';
import { FamilyHistoryPage } from '../family-history/family-history';
import { ImmunizationsPage } from '../immunizations/immunizations';
import { PharmaciesPage } from '../pharmacies/pharmacies';
import { SureCellPage } from '../surecell/surecell';
import { OtherInfoPage } from '../other-info/other-info';
import { PregnancyPage } from '../pregnancy/pregnancy';

import { AddCategoryPage } from '../add-category/add-category';

import * as $ from "jquery";
import 'slick-carousel/slick/slick';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public relationship:string;


  items: Array<{id:number, name:string, page:any, icon:string, show:boolean }>;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    ) {
    this.items = [{ id: 0, name: 'Personal Information', page: PersonalInfoPage , icon:'person', show: true },
                  { id: 1, name: 'Vital Medical Conditions', page: VitalMedicalPage, icon: 'warning', show: true },
                  { id: 2, name: 'Emergency Contacts', page: EmergencyPage, icon:'contacts-book', show: true },
                  { id: 3, name: 'Allergies', page: AllergiesPage, icon:'eye', show: true },
                  { id: 4, name: 'Medications', page: MedicationsPage, icon:'pill',  show: true },
                  { id: 5, name: 'Physicians', page: PhysiciansPage, icon:'doctor', show: true },
                  { id: 6, name: 'Insurance Information', page: InsuranceInfoPage, icon:'umbrella', show: true },
                  { id: 7, name: 'Surgries', page: SurgeriesPage, icon:'surgeon', show: false },
                  { id: 8, name: 'Labs', page: LabsPage, icon:'test-tube', show: false },
                  { id: 9, name: 'Living Will', page: LivingWillPage, icon:'document-scroll-2', show: false },
                  { id: 10, name: 'DNR', page: DNRPage, icon:'document-lines', show: false },
                  { id: 11, name: 'Family History', page: FamilyHistoryPage, icon:'family', show: false },
                  { id: 12, name: 'Immunizations', page: ImmunizationsPage, icon:'immunizations', show: false },
                  { id: 13, name: 'Pharmacies', page: PharmaciesPage, icon:'medical-kit', show: false },
                  { id: 14, name: 'SureCell', page: SureCellPage, icon:'react', show: false },
                  { id: 15, name: 'Other Info', page: OtherInfoPage, icon:'info', show: false },
                  { id: 16, name: 'Pregnancy', page: PregnancyPage, icon:'baby-stroller', show: false },
                ];
    this.relationship = 'edit';
  }

  ngOnInit() {

  $('.myCarousel').slick({
      centerMode: true,
      centerPadding: '50px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        }
      ]
    });
  }

  addCategoryPage(){
    console.log('go UserProfile Page');
    let profileModal = this.modalCtrl.create(AddCategoryPage);
    profileModal.present();
  }

  onItemClick(event, page) {
    console.log(page);
    this.navCtrl.push(page);
  }


}
