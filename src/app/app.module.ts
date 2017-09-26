import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule} from '@angular/http';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';
import { MultiPickerModule } from 'ion-multi-picker';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
import { Crop } from '@ionic-native/crop';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { TouchID } from '@ionic-native/touch-id';
import { IonAlphaScrollModule } from '../components/ionic2-alpha-scroll';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { MyApp } from './app.component';

import { MainPage } from '../pages/main/main';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ForgotpasswordPage } from '../pages/forgot-password/forgot-password';

import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { InboxPage } from '../pages/inbox/inbox';
import { MorePage } from '../pages/more/more';
import { TabsPage } from '../pages/tabs/tabs';

import { PersonalInfoPage } from '../pages/personal-info/personal-info';
import { VitalMedicalPage } from '../pages/vital-medical/vital-medical';
import { VitalEditPage } from '../pages/vital-edit/vital-edit';
import { EmergencyPage } from '../pages/emergency/emergency';
import { EmergencyEditPage } from '../pages/emergency-edit/emergency-edit';
import { AllergiesPage } from '../pages/allergies/allergies';
import { AllergiesEditPage } from '../pages/allergies-edit/allergies-edit';
import { MedicationsPage } from '../pages/medications/medications';
import { MedicationsEditPage } from '../pages/medications-edit/medications-edit';
import { PhysiciansPage } from '../pages/physicians/physicians';
import { PhysiciansEditPage } from '../pages/physicians-edit/physicians-edit';
import { InsuranceInfoPage } from '../pages/insurance-info/insurance-info';
import { InsuranceEditPage } from '../pages/insurance-edit/insurance-edit';
import { SurgeriesPage } from '../pages/surgeries/surgeries';
import { SurgeriesEditPage } from '../pages/surgeries-edit/surgeries-edit';
import { LabsPage } from '../pages/labs/labs';
import { LabsEditPage } from '../pages/labs-edit/labs-edit';
import { LivingWillPage } from '../pages/living-will/living-will';
import { DNRPage } from '../pages/dnr/dnr';
import { FamilyHistoryPage } from '../pages/family-history/family-history';
import { FamilyHistoryEditPage } from '../pages/family-history-edit/family-history-edit';
import { ImmunizationsPage } from '../pages/immunizations/immunizations';
import { ImmunizationsEditPage } from '../pages/immunizations-edit/immunizations-edit';
import { PharmaciesPage } from '../pages/pharmacies/pharmacies';
import { PharmaciesEditPage } from '../pages/pharmacies-edit/pharmacies-edit';
import { SureCellPage } from '../pages/surecell/surecell';
import { SureCellEditPage } from '../pages/surecell-edit/surecell-edit';
import { OtherInfoPage } from '../pages/other-info/other-info';
import { OtherInfoEditPage } from '../pages/other-edit/other-edit';
import { LinkedProductPage } from '../pages/linked-product/linked-product';
import { LinkedProductEditPage } from '../pages/linked-product-edit/linked-product-edit';
import { PregnancyPage } from '../pages/pregnancy/pregnancy';
import { PregnancyEditPage } from '../pages/pregnancy-edit/pregnancy-edit';
import { PopoverContentPage } from '../pages/popover/popover';

import { SettingsPage } from '../pages/settings/settings';
import { PasscodePage } from '../pages/passcode/passcode'
import { PasscodeSettingPage } from '../pages/passcode-setting/passcode-setting';
import { IonPasscode } from '../components/ion-passcode';

import { AddCategoryPage } from '../pages/add-category/add-category';

import { RemindersPage } from '../pages/reminders/reminders';
import { SelectMedicationPage } from '../pages/select-medication/select-medication'
import { AddMedicationPage } from '../pages/add-medication/add-medication';
import { EditMedicationPage } from '../pages/edit-medication/edit-medication';
import { NewReminderPage } from '../pages/new-reminder/new-reminder';
import { ExplainSlidePage } from '../pages/explain-slide/explain-slide';
import { AddDependentPage } from '../pages/add-dependent/add-dependent';
import { ManageSharingPage } from '../pages/manage-sharing/manage-sharing';
import { LinkNewPage } from '../pages/link-new/link-new';
import { LinkEditPage } from '../pages/link-edit/link-edit';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { UpdateEamilPage } from '../pages/update-email/update-email';
import { NotificationsPage } from '../pages/notifications/notifications';
import { GroupCodePage } from '../pages/group-code/group-code';
import { InboxDetailsPage } from '../pages/inbox-details/inbox-details';
import { PreviewProfilePage } from '../pages/preview-profile/preview-profile';
import { SchedulePage } from '../pages/schedule/schedule';
import { ProductSuccessPage } from '../pages/product-success/product-success';

// swiper components
import { SwiperModule } from 'angular2-useful-swiper';
/* modal componets */

import { TabletDetailModal } from '../pages/modals/tablet-detail/tablet-detail';
import { EditReminderModal } from '../pages/modals/edit-reminder/edit-reminder';

// Services
import { Flags } from "../providers/flag";
import { UserService } from '../providers/user-service';
import { CountryService } from '../providers/country-service';
import { BaseMedicineService } from '../providers/base-medicine-service';
import { BaseService } from "../providers/base-service";
import { DependentService } from '../providers/dependent-service';
import { RemindersService } from '../providers/reminders-service';
import { LocalNotificationService } from '../providers/local-notification-service';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    LoginPage,
    SignupPage,
    ForgotpasswordPage,
    HomePage,
    ProfilePage,
    InboxPage,
    MorePage,
    TabsPage,

    PersonalInfoPage,
    VitalMedicalPage,
    VitalEditPage,
    EmergencyPage,
    EmergencyEditPage,
    AllergiesPage,
    AllergiesEditPage,
    MedicationsPage,
    MedicationsEditPage,
    PhysiciansPage,
    PhysiciansEditPage,
    InsuranceInfoPage,
    InsuranceEditPage,
    SurgeriesPage,
    SurgeriesEditPage,
    LabsPage,
    LabsEditPage,
    LivingWillPage,
    DNRPage,
    FamilyHistoryPage,
    FamilyHistoryEditPage,
    ImmunizationsPage,
    ImmunizationsEditPage,
    PharmaciesPage,
    PharmaciesEditPage,
    SureCellPage,
    SureCellEditPage,
    OtherInfoPage,
    OtherInfoEditPage,
    LinkedProductPage,
    LinkedProductEditPage,
    PregnancyPage,
    PregnancyEditPage,
    PopoverContentPage,

    AddDependentPage,
    ManageSharingPage,
    LinkNewPage,
    SettingsPage,
    PasscodePage,
    PasscodeSettingPage,
    IonPasscode,
    ChangePasswordPage,
    UpdateEamilPage,
    NotificationsPage,
    GroupCodePage,

    AddCategoryPage,

    RemindersPage,
    SelectMedicationPage,
    AddMedicationPage,
    EditMedicationPage,
    NewReminderPage,
    ExplainSlidePage,
    InboxDetailsPage,
    PreviewProfilePage,
    SchedulePage,
    LinkEditPage,
    ProductSuccessPage,

    TabletDetailModal,
    EditReminderModal
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SwiperModule,
    IonAlphaScrollModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: 'Back',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    }),
    IonicStorageModule.forRoot(),
    MultiPickerModule
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
    InboxPage,
    MorePage,
    TabsPage,

    PersonalInfoPage,
    VitalMedicalPage,
    VitalEditPage,
    EmergencyPage,
    EmergencyEditPage,
    AllergiesPage,
    AllergiesEditPage,
    MedicationsPage,
    MedicationsEditPage,
    PhysiciansPage,
    PhysiciansEditPage,
    InsuranceInfoPage,
    InsuranceEditPage,
    SurgeriesPage,
    SurgeriesEditPage,
    LabsPage,
    LabsEditPage,
    LivingWillPage,
    DNRPage,
    FamilyHistoryPage,
    FamilyHistoryEditPage,
    ImmunizationsPage,
    ImmunizationsEditPage,
    PharmaciesPage,
    PharmaciesEditPage,
    SureCellPage,
    SureCellEditPage,
    OtherInfoPage,
    OtherInfoEditPage,
    LinkedProductPage,
    LinkedProductEditPage,
    PregnancyPage,
    PregnancyEditPage,
    PopoverContentPage,

    AddDependentPage,
    ManageSharingPage,
    LinkNewPage,
    SettingsPage,
    PasscodePage,
    PasscodeSettingPage,
    IonPasscode,
    ChangePasswordPage,
    UpdateEamilPage,
    NotificationsPage,
    GroupCodePage,

    AddCategoryPage,

    RemindersPage,
    SelectMedicationPage,
    AddMedicationPage,
    EditMedicationPage,
    NewReminderPage,
    ExplainSlidePage,
    InboxDetailsPage,
    PreviewProfilePage,
    SchedulePage,
    LinkEditPage,
    ProductSuccessPage,

    TabletDetailModal,
    EditReminderModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    SQLite,
    BarcodeScanner,
    Camera,
    ActionSheet,
    Crop,
    FileTransfer,
    TouchID,
    InAppBrowser,
    UserService,
    BaseMedicineService,
    BaseService,
    CountryService,
    Flags,
    DependentService,
    RemindersService,
    LocalNotificationService,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
