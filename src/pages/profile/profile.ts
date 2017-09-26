import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, AlertController, LoadingController, ActionSheetController, PopoverController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { IonAlphaScrollModule } from '../../components/ionic2-alpha-scroll';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";

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
import { LinkedProductPage } from '../linked-product/linked-product';
import { PregnancyPage } from '../pregnancy/pregnancy';
import { PopoverContentPage } from '../popover/popover';

import { AddCategoryPage } from '../add-category/add-category';
import { ExplainSlidePage } from '../explain-slide/explain-slide';
import { AddDependentPage } from '../add-dependent/add-dependent';
import { PreviewProfilePage } from '../preview-profile/preview-profile';
import { LinkNewPage } from '../link-new/link-new';
import { ManageSharingPage } from '../manage-sharing/manage-sharing';

import { UserService } from "../../providers/user-service";


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public profiles: any;
  public profile_id:number;
  public personData:any;
  public subscription_type:any;
  public email: string;
  public auth_token: string;
  public relationship:string;
  public config: Object;
  public isLoading: boolean = false;

  public parent_id:any;
  public documents:any;
  public date_documents:any;
  public date_documents_array:any = {};
  public date_month:any=[];

  public lists:any;
  public currentPageClass: any;
  public alphaScrollItemTemplate : string;
  public alphaScrollItemTemplate1 : string;
  public triggerAlphaScrollChange: number;
  public slug:any;

  public folder_name:any;
  public checkbox_flag:any;
  public select_flag:any;
  public selected_ids :any = [];
  public sort_flag: string = "name";
  public sorted_documents: Array<{item_type: string, id: string, name: string, parent_id: string,
                                  profile_id: string, slug: string, updated_at: string, is_private:string,
                                  media_type: string, folder_id: string, file_size: string, file_size_in_bytes:string,
                                  url: string}>;

  public pages: Array<{id:number, name:string, page:any, icon:string, show:boolean, sup:string }>;

  searchQuery: string = '';
  items: string[];
  public addedCategories: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public actionSheetCtrl: ActionSheetController,
    public popOverCtrl: PopoverController,
    private inAppBrowser: InAppBrowser,
    public storage: Storage,
    public userService: UserService,
    ) {

      let that = this;
      this.config = {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        observer: true,
        spaceBetween: 40,
        grabCursor: true,
        onSlideChangeEnd: function(swiper) {
              that.swipe(swiper);
          }
        };

        this.email = "";
        this.auth_token = "";
        // this.pages = [{ id: 0, name: 'Personal Information', page: PersonalInfoPage , icon:'person', show: true, sup:'' },
        //               { id: 1, name: 'Vital Medical Conditions', page: VitalMedicalPage, icon: 'warning', show: true, sup:'' },
        //               { id: 2, name: 'Emergency Contacts', page: EmergencyPage, icon:'contacts-book', show: true, sup:'' },
        //               { id: 3, name: 'Allergies', page: AllergiesPage, icon:'eye', show: true, sup:'' },
        //               { id: 4, name: 'Medications', page: MedicationsPage, icon:'pill',  show: true, sup:'' },
        //               { id: 5, name: 'Physicians', page: PhysiciansPage, icon:'doctor', show: true, sup:'' },
        //               { id: 6, name: 'Insurance Information', page: InsuranceInfoPage, icon:'umbrella', show: true, sup:'' },
        //               { id: 7, name: 'Surgries', page: SurgeriesPage, icon:'surgeon', show: false, sup:'' },
        //               { id: 8, name: 'Labs', page: LabsPage, icon:'test-tube', show: false, sup:'' },
        //               { id: 9, name: 'Living Will', page: LivingWillPage, icon:'document-scroll-2', show: false, sup:'' },
        //               { id: 10, name: 'DNR', page: DNRPage, icon:'document-lines', show: false, sup:'' },
        //               { id: 11, name: 'Family History', page: FamilyHistoryPage, icon:'family', show: false, sup:'' },
        //               { id: 12, name: 'Immunizations', page: ImmunizationsPage, icon:'syringe', show: false, sup:'' },
        //               { id: 13, name: 'Pharmacies', page: PharmaciesPage, icon:'medical-kit', show: false, sup:'' },
        //               { id: 14, name: 'SureCell', page: SureCellPage, icon:'atom', show: false, sup:'TM' },
        //               { id: 15, name: 'Other Info', page: OtherInfoPage, icon:'info', show: false, sup:'' },
        //               { id: 16, name: 'Pregnancy', page: PregnancyPage, icon:'baby-stroller', show: false, sup:'' },
        //             ];

        this.pages = [{ id: 0, name: 'Personal Information', page: PersonalInfoPage , icon:'person', show: true, sup:'' },
                      { id: 1, name: 'Vital Medical Conditions', page: VitalMedicalPage, icon: 'warning', show: true, sup:'' },
                      { id: 2, name: 'Emergency Contacts', page: EmergencyPage, icon:'contacts-book', show: true, sup:'' },
                      { id: 3, name: 'Allergies', page: AllergiesPage, icon:'eye', show: true, sup:'' },
                      { id: 4, name: 'Medications', page: MedicationsPage, icon:'pill',  show: true, sup:'' },
                      { id: 5, name: 'Physicians', page: PhysiciansPage, icon:'doctor', show: true, sup:'' },
                      { id: 6, name: 'Insurance Information', page: InsuranceInfoPage, icon:'umbrella', show: true, sup:'' },
                      { id: 7, name: 'Other Info', page: OtherInfoPage, icon:'info', show: false, sup:'' }
                    ];

        this.relationship = 'edit';

        this.lists = [ {'name': 'flask'}, {'name': 'wifi'}, {'name': 'beer'}, {'name': 'football'},
                        {'name': 'basketball'}, {'name': 'paper'}, {'name': 'plane'}, {'name': 'american'},
                        {'name': 'boat'},  {'name': 'bluetooth'}, {'name': 'build'}];

        this.slug = navParams.get('slug');
        console.log('slug', this.slug);

        this.currentPageClass = this;
        this.alphaScrollItemTemplate = '<div class="item-div">'+
                                          '<ion-card>'+
                                            '<ion-item (click)="currentPageClass.onItemClick(item)">'+
                                                '<ion-icon item-left *ngIf="item.item_type==\'folder\'" name="ios-folder-outline" class="icon-style"></ion-icon>'+
                                                '<ion-icon item-left *ngIf="item.media_type==\'image\'" name="ios-image-outline" class="icon-style"></ion-icon>'+
                                                '<ion-icon item-left *ngIf="item.media_type==\'video\'" name="ios-videocam-outline" class="icon-style"></ion-icon>'+
                                                '<ion-icon item-left *ngIf="item.media_type==\'document\'" name="ios-document-outline" class="icon-style"></ion-icon>'+
                                                '<h2 style="font-size:5vw;">{{item.name}}</h2>'+
                                                '<p>{{item.file_size}}</p>'+
                                              '</ion-item>'+
                                              '<ion-icon name="ios-arrow-dropdown-outline" item-right (click)="currentPageClass.moreOptions(item);"></ion-icon>'+
                                          '</ion-card>'+
                                        '</div>';

        this.alphaScrollItemTemplate1 = '<div class="item-div">'+
                                            '<ion-checkbox item-left (ionChange)="currentPageClass.check1(item.id);"></ion-checkbox>'+
                                            '<ion-item (click)="currentPageClass.onItemClick(item)">'+
                                                '<ion-icon item-left *ngIf="item.item_type==\'folder\'" name="ios-folder-outline" class="icon-style"></ion-icon>'+
                                                '<ion-icon item-left *ngIf="item.media_type==\'image\'" name="ios-image-outline" class="icon-style"></ion-icon>'+
                                                '<ion-icon item-left *ngIf="item.media_type==\'video\'" name="ios-videocam-outline" class="icon-style"></ion-icon>'+
                                                '<ion-icon item-left *ngIf="item.media_type==\'document\'" name="ios-document-outline" class="icon-style"></ion-icon>'+
                                                '<h2 style="font-size:5vw;">{{item.name}}</h2><p>{{item.file_size}}</p>'+
                                                '<ion-icon name="ios-arrow-dropdown-outline" item-right></ion-icon>'+
                                            '</ion-item>'+
                                        '</div>';
        this.triggerAlphaScrollChange = 0;
  }

  swipe(swiper){
    this.profile_id = this.profiles[swiper.activeIndex].id;
    this.personData = this.profiles[swiper.activeIndex].person;
    this.subscription_type = this.profiles[swiper.activeIndex].subscription_type;

    console.log(this.profile_id);
    console.log(this.subscription_type);
    if(this.relationship == 'document' && this.subscription_type == 'Premium') {
      this.getDocument();
    }
  }

  ionViewWillEnter(){
    this.getData();
  }


  getData(){
    let loading = this.loadingCtrl.create();
    loading.present();

    this.storage.get('email').then(val=>{
      this.email = val;
      this.storage.get('auth_token').then(val=>{
        this.auth_token = val;
        this.userService.getProfiles(this.email, this.auth_token)
          .subscribe(
            (data) => {
              if(data.success == false){
                loading.dismiss();
                console.log('Data Error');
              }else{
                loading.dismiss();
                 console.log('profileData', data);
                 this.isLoading = true;
                 this.profiles = data.profiles;
                 this.profile_id = this.profiles[0].id;
                 this.personData = this.profiles[0].person;
                 this.subscription_type = this.profiles[0].subscription_type;
                 console.log(this.profile_id);
                 console.log(this.subscription_type);
                 this.storage.set('profileData', data.profiles);
             }
            },
            (data) => {
              loading.dismiss();
              console.log('internet Fails');
            });
        });
    });
  }

  optionSheet(){
    // Ionic 2 Component
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',

      buttons: [
        {
          text: 'Add Dependent Profile',
          icon: 'ios-person-add-outline',
          handler: () => {
            console.log('AddDependentPage clicked');
            this.goAddDependentPage();
          }
        },{
          text: 'Preview Profile',
          icon: 'ios-search-outline',
          handler: () => {
            console.log('PreviewProfilePage clicked');
            this.goPreviewProfilePage();

          }
        },{
          text: 'Link New Product',
          icon: 'ios-link-outline',
          handler: () => {
            console.log('LinkNewPage clicked');
            this.goLinkNewPage();
          }
        },{
          text: ' Delete Profile',
          icon: 'ios-trash',
          role: 'destructive',
          handler: () => {
            console.log('Delete clicked');
            this.deleteAlert();
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  addCategoryPage(){
    console.log('go AddCategory Page');
    let profileModal = this.modalCtrl.create(AddCategoryPage, {ids: this.addedCategories});
    profileModal.onDidDismiss(data => {
      if(data) {
        this.addedCategories = this.addedCategories.concat(data.category.id);
        this.pages = this.pages.concat(data.category);
      }
    });
    profileModal.present();
  }

  goLinkedProductPage(){
    console.log('go LinkedProduct Page');
    this.navCtrl.push(LinkedProductPage, {profile_id: this.profile_id, personData: this.personData});
  }

  goAddDependentPage(){
    console.log('go AddDependentPage Page');
    let profileModal = this.modalCtrl.create(AddDependentPage, {
      profile_id: this.profile_id
    });
    profileModal.present();
  }

  goPreviewProfilePage(){
    console.log('go PreviewProfilePage Page');
    let profileModal = this.modalCtrl.create(PreviewProfilePage);
    profileModal.present();
  }

  goLinkNewPage(){
    console.log('go LinkNewPage Page');
    let profileModal = this.modalCtrl.create(LinkNewPage);
    profileModal.present();
  }

  goManageSharingPage(){
    console.log('go ManageSharing Page');
    this.navCtrl.push(ManageSharingPage);
  }

  explainSlidePage(){
    console.log('go Slide Page');
    let profileModal = this.modalCtrl.create(ExplainSlidePage, {personData: this.personData});
    profileModal.present();
  }

  deleteAlert(){
  let alert = this.alertCtrl.create({
    title: 'Are you sure?',
    subTitle: 'Do you want to delete this Profile?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Ok',
        handler: () => {
          console.log('Buy clicked');
          this.deleteProfile();
          }
        }
      ]
    });
    alert.present();
  }

  deleteProfile(){
    let loading = this.loadingCtrl.create();
    loading.present();

    this.userService.deleteProfile( this.auth_token, this.email, this.profile_id)
      .subscribe(
        (data) => {
          loading.dismiss();
          if(data.success == false){
            console.log(data);
         }else{
           console.log("login result", data);
           this.getData();
         }
        },
        (data) => {
          loading.dismiss();
          console.log("Login error");
      });
  }

  onPageClick(event, page) {
    console.log(page);
    this.navCtrl.push(page, { profile_id: this.profile_id, personData: this.personData});
  }



  segmentChanged(event){
    console.log(event.value);
    this.relationship = event.value;
  }

  // importFile(){
  //   let actionSheet = this.actionSheetCtrl.create({
  //
  //     buttons: [
  //       {
  //         text: 'Camera',
  //         icon: 'ios-camera-outline',
  //         handler: () => {
  //           console.log('Add Camera');
  //           // this.goAddDependentPage();
  //         }
  //       },{
  //         text: 'Choose a photo',
  //         icon: 'ios-images-outline',
  //         handler: () => {
  //           console.log('Choose a image');
  //           // this.goPreviewProfilePage();
  //
  //         }
  //       },{
  //         text: 'iCloud Files',
  //         icon: 'ios-cloud-outline',
  //         handler: () => {
  //           console.log('import iCloud');
  //           // this.addCategoryPage()
  //         }
  //       },{
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       }
  //     ]
  //   });
  //   actionSheet.present();
  // }


  onItemClick(item, profile_id) {
   console.log("item: " + JSON.stringify(item));

   if (item.item_type == "folder"){
    //  this.navCtrl.push(DocumentsPage, {
    //    slug: item.slug,
    //    profile_id: item.profile_id,
    //    parent_id: item.id
    //  });
    console.log('Next Document');
   }
   else{

    const options: InAppBrowserOptions = {
      zoom: 'no',
      location:'no',
      closebuttoncaption:'< Back',
      toolbarposition: 'bottom',
      toolbar:'yes'
    }
       const browser = this.inAppBrowser.create(item.url, '_blank', options);
    }
  }


  cancelSelect(){
  this.checkbox_flag = 0;
  }

  check1(id){
    let index = this.selected_ids.indexOf(id);
    if(index > -1){
      this.selected_ids.splice(index, 1);
    }
    else{
      this.selected_ids.push(id);
    }

    console.log(this.selected_ids);
  }

  getDocument(){
    this.documents = [];
    this.date_documents = [];
    let loading = this.loadingCtrl.create();
    loading.present();

    this.storage.get('email').then(val=>{
      this.email = val;
      this.storage.get('auth_token').then(val=>{
        this.auth_token = val;
        this.userService.getDocuments(this.email, this.auth_token, this.profile_id, this.slug)
          .subscribe(
            (data) => {
              loading.dismiss();
              if(data.success == false){
                console.log("get Documents:" + JSON.stringify(data));
             }else{

               this.documents = data.items;
               console.log(this.documents);
               this.date_documents = data.items;
               let name1, name2: string;
               let temp:any;

               for (let k=0; k<this.documents.length; k++){

                 if (this.documents[k].item_type == "document"){
                     let temp_document = {"item_type": "", "id": 0, "name": "", "profile_id": 0,
                                          "media_type": "", "folder_id": null, "file_size": 0, "file_size_in_bytes":0,
                                          "updated_at":"", "url": "", "is_private": false};
                     temp_document.item_type = this.documents[k].item_type;
                     temp_document.id = this.documents[k].id;
                     temp_document.name = this.documents[k].file_name;
                     temp_document.profile_id = this.documents[k].profile_id;
                     temp_document.media_type = this.documents[k].media_type;
                     temp_document.folder_id = this.documents[k].folder_id;
                     temp_document.file_size = this.documents[k].file_size;
                     temp_document.file_size_in_bytes = this.documents[k].file_size_in_bytes;
                     temp_document.updated_at = this.documents[k].updated_at;
                     temp_document.url = this.documents[k].url;
                     temp_document.is_private = this.documents[k].is_private;

                     this.documents[k] = temp_document;
                     this.date_documents[k] = temp_document;
                  }
               }

               if (this.sort_flag == 'name'){
                    for (let i = 0; i< this.documents.length; i++){
                       for (let j = i+1; j<this.documents.length; j++){
                         if (this.documents[i].name.localeCompare(this.documents[j].name) > 0){
                           temp = this.documents[i];
                           this.documents[i] = this.documents[j];
                           this.documents[j] = temp;
                         }
                       }
                    }
                  }

                  if (this.sort_flag == 'date'){
                    for (let i = 0; i< this.date_documents.length; i++){
                       for (let j = i+1; j<this.date_documents.length; j++){
                         if (this.date_documents[i].updated_at.localeCompare(this.date_documents[j].updated_at) < 0){
                           temp = this.date_documents[i];
                           this.date_documents[i] = this.date_documents[j];
                           this.date_documents[j] = temp;
                         }
                       }
                    }

                    for (let i=0; i<this.date_documents.length; i++){
                      let temp_date_month = this.date_documents[i].updated_at.substr(0, 7);
                      if (this.date_month.indexOf(temp_date_month) == -1){
                        this.date_month.push(temp_date_month);
                      }
                    }

                    for (let i= 0; i<this.date_month.length; i++){
                      this.date_documents_array[this.date_month[i]] = [];
                      for (let j=0; j< this.date_documents.length;j++){
                        if (this.date_documents[j].updated_at.includes(this.date_month[i])){
                          this.date_documents_array[this.date_month[i]].push(this.date_documents[j])
                        }
                      }
                    }
                  }

               console.log("get Documents:" + JSON.stringify(this.date_documents_array));
             }
            },
            (data) => {
              loading.dismiss();
            });
      });
    });
  }

  deleteItems(){
    if (this.selected_ids.length > 0){
      let loading = this.loadingCtrl.create();
      loading.present();

      this.storage.get('email').then(val=>{
        this.email = val;
        this.storage.get('auth_token').then(val=>{
          this.auth_token = val;
          if (this.profile_id == undefined){
            this.profile_id = this.profile_id;
          }
          this.userService.deleteDocuments(this.email, this.auth_token, this.profile_id, this.selected_ids)
            .subscribe(
              (data) => {
                if(data.success == false){
                  console.log("get Documents:" + JSON.stringify(this.profiles));
               }else{

               }
               this.userService.deleteFolders(this.email, this.auth_token, this.profile_id, this.selected_ids)
                 .subscribe(
                   (data) => {
                     loading.dismiss();
                     if(data.success == false){
                       console.log("get Documents:" + JSON.stringify(data));
                    }else{

                    }
                    this.getDocument();
                    this.checkbox_flag = 0;
                   },
                   (data) => {
                     loading.dismiss();
                     console.log("get Documents:" + JSON.stringify(data));
                   });
              },
              (data) => {
                loading.dismiss();
              });
        });
      });
    }
  }

  selectOptions(myEvent){
      let data = {'profile_id': this.profile_id, 'parent_id':this.parent_id, 'sort_flag':this.sort_flag};
      console.log("dataaa", data);
      let popover = this.popOverCtrl.create(PopoverContentPage, data);
      popover.present({
        ev: myEvent
      });

      popover.onDidDismiss((popoverData) => {
        if (popoverData=='1'){
          this.checkbox_flag = 1;
          this.selected_ids = [];
          console.log(this.checkbox_flag);
        }
        else if (popoverData == 'name'){
          this.sort_flag = popoverData;
          this.getDocument();
        }
        else if (popoverData == 'date'){
          this.sort_flag = popoverData;
          this.getDocument();
        }
        else{
          this.getDocument();
        }
      })
    }

    moreOptions(item){
    if (item.item_type == 'folder'){
      let actionSheet = this.actionSheetCtrl.create({
            title: item.name ,
            subTitle:"",
            buttons: [
              {
                text: 'Share Folder',
                handler: () => {

                }
              },{
                text: 'Rename Folder',
                handler: () => {

                }
              },{
                text: 'Move Folder',
                handler: () => {

                }
              },{
                text: 'Delete Folder',
                role: 'destructive',
                handler: () => {

                }
              },{
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              }
            ]
          });
        actionSheet.present();
    }
    else{
      let actionSheet = this.actionSheetCtrl.create({
            title: item.name ,
            subTitle:"",
            buttons: [
              {
                text: 'Share File',
                handler: () => {

                }
              },{
                text: 'Rename File',
                handler: () => {

                }
              },{
                text: 'Move File',
                handler: () => {

                }
              },{
                text: 'Delete File',
                role: 'destructive',
                handler: () => {

                }
              },{
                text: 'Cancel',
                role: 'cancel',
                handler: () => {

                }
              }
            ]
          });
        actionSheet.present();
    }
  }

}
