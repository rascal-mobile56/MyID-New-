import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule} from '@angular/http';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';

import { MainPage } from '../pages/main/main';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ForgotpasswordPage } from '../pages/forgot-password/forgot-password';

import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { RemindersPage } from '../pages/reminders/reminders';
import { InboxPage } from '../pages/inbox/inbox';
import { MorePage } from '../pages/more/more';
import { TabsPage } from '../pages/tabs/tabs';

import { PersonalInfoPage } from '../pages/personal-info/personal-info';
import { VitalMedicalPage } from '../pages/vital-medical/vital-medical';
import { EmergencyPage } from '../pages/emergency/emergency';
import { AllergiesPage } from '../pages/allergies/allergies';
import { MedicationsPage } from '../pages/medications/medications';
import { PhysiciansPage } from '../pages/physicians/physicians';
import { InsuranceInfoPage } from '../pages/insurance-info/insurance-info';
import { SurgeriesPage } from '../pages/surgeries/surgeries';
import { LabsPage } from '../pages/labs/labs';
import { LivingWillPage } from '../pages/living-will/living-will';
import { DNRPage } from '../pages/dnr/dnr';
import { FamilyHistoryPage } from '../pages/family-history/family-history';
import { ImmunizationsPage } from '../pages/immunizations/immunizations';
import { PharmaciesPage } from '../pages/pharmacies/pharmacies';
import { SureCellPage } from '../pages/surecell/surecell';
import { OtherInfoPage } from '../pages/other-info/other-info';
import { PregnancyPage } from '../pages/pregnancy/pregnancy';

import { SettingPage } from '../pages/setting/setting';
import { SamplePage } from '../pages/sample/sample';
import { AddCategoryPage } from '../pages/add-category/add-category';

import { Flags } from "../providers/flag";
import { UserService } from '../providers/user-service';
import { BaseService } from "../providers/base-service";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as $ from "jquery";
import 'slick-carousel/slick/slick';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    LoginPage,
    SignupPage,
    ForgotpasswordPage,
    HomePage,
    ProfilePage,
    RemindersPage,
    InboxPage,
    MorePage,
    TabsPage,

    PersonalInfoPage,
    VitalMedicalPage,
    EmergencyPage,
    AllergiesPage,
    MedicationsPage,
    PhysiciansPage,
    InsuranceInfoPage,
    SurgeriesPage,
    LabsPage,
    LivingWillPage,
    DNRPage,
    FamilyHistoryPage,
    ImmunizationsPage,
    PharmaciesPage,
    SureCellPage,
    OtherInfoPage,
    PregnancyPage,

    SettingPage,

    AddCategoryPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    }),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    LoginPage,
    SignupPage,
    ForgotpasswordPage,
    HomePage,
    ProfilePage,
    RemindersPage,
    InboxPage,
    MorePage,
    TabsPage,

    PersonalInfoPage,
    VitalMedicalPage,
    EmergencyPage,
    AllergiesPage,
    MedicationsPage,
    PhysiciansPage,
    InsuranceInfoPage,
    SurgeriesPage,
    LabsPage,
    LivingWillPage,
    DNRPage,
    FamilyHistoryPage,
    ImmunizationsPage,
    PharmaciesPage,
    SureCellPage,
    OtherInfoPage,
    PregnancyPage,

    SettingPage,
    AddCategoryPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    BaseService,
    Flags,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
