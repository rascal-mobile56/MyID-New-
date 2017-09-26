import { Component} from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';
import { BaseMedicineService } from "../../providers/base-medicine-service";
import { RemindersService } from '../../providers/reminders-service';
@Component({
  selector: 'edit-medication',
  templateUrl: 'edit-medication.html'
})
export class EditMedicationPage {

  public frequencyColumns: any;
  public tablet_image: string;

  // demi icons
  public icons: any;
  public default_forms: any;
  public default_colors: any;
  public selecting: any;

  public note_template:string;
  public medicationData: any = {};

  public color1: any;
  public color2: any;
  public form: any;
  public loading: any;
  public loaded: boolean = false;
  public schedule: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    public baseMedicineService: BaseMedicineService,
    public remindersService: RemindersService,
    public alertController: AlertController
  ) {
      this.medicationData.id = this.navParams.get("id");
      console.log(this.medicationData.id);
      this.loading = this.loadingCtrl.create();

      this.frequencyColumns = [
      {
        name: 'times',
        parentCol: 'schedule',
        options: [
          { text: '1', value: '1', parentVal: '1' },
          { text: '2', value: '2', parentVal: '1' },
          { text: '3', value: '3', parentVal: '1' },
          { text: '4', value: '4', parentVal: '1' },
          { text: '5', value: '5', parentVal: '1' },
          { text: '6', value: '6', parentVal: '1' },
          { text: '1', value: '1', parentVal: '2' },
          { text: '2', value: '2', parentVal: '2' },
          { text: '3', value: '3', parentVal: '2' },
          { text: '4', value: '4', parentVal: '2' },
          { text: '5', value: '5', parentVal: '2' },
          { text: '6', value: '6', parentVal: '2' },
          { text: '7', value: '7', parentVal: '2' },
          { text: '8', value: '8', parentVal: '2' },
          { text: '9', value: '9', parentVal: '2' },
          { text: '10', value: '10', parentVal: '2' },
          { text: '11', value: '11', parentVal: '2' },
          { text: '12', value: '12', parentVal: '2' },
          { text: '13', value: '13', parentVal: '2' },
          { text: '14', value: '14', parentVal: '2' }
        ]
      },{
        name: 'schedule',
        options: [
          { text: 'Daily', value: '1' },
          { text: 'Weekly', value: '2' },
        ]
      }];

      this.tablet_image = "assets/tablet-icon/icon-pill.png";

      // demo icons
      this.icons = [
        { type: "pill", color1: "#ff0000", color2: "#00ff00" },
        { type: "bubbles", color1: "#ffff00" },
        { type: "shape", color1: "#ff00ff" },
        { type: "tube", color1: "#0000ff" }
      ];

      this.default_forms = this.baseMedicineService.getForms();
      this.default_colors = this.baseMedicineService.getColors();

      this.selecting = {
        color1: false,
        color2: false,
        form: false,
        note: false
      };
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
    this.loading.present();

    this.remindersService.get(this.medicationData.id)
    .then((res) => {
      this.medicationData = res;
      this.medicationData.visible = true;
      console.log(this.medicationData);
      this.initReminders();

      let stringToSpilt = this.medicationData.frequency;
      let x = stringToSpilt.split(" ");
      let times = +x[0];
      this.schedule = +x[2];

      this.baseMedicineService.getForm(this.medicationData.form_Id)
      .then((res) => {
        this.medicationData.form = res;
      }, (err) => {
        console.log(err);
        this.loading.dismiss();
      });

      this.baseMedicineService.getColor(this.medicationData.color1_Id)
      .then((res) => {
        this.medicationData.color1 = res;
      }, (err) => {
        console.log(err);
        this.loading.dismiss();
      });

      this.baseMedicineService.getColor(this.medicationData.color2_Id)
      .then((res) => {
        this.medicationData.color2 = res;
      }, (err) => {
        console.log(err);
        this.loading.dismiss();
      });
      this.loaded = true;
      this.loading.dismiss();
    }, (err) => {
      this.loading.dismiss();
      console.log(err);
    });
  }

  initReminders() {
    let stringToSpilt = this.medicationData.frequency;
    let x = stringToSpilt.split(" ");
    let times = +x[0];
    this.schedule = +x[2];
    console.log(this.medicationData.reminders.length);
    if (!this.medicationData.reminders.length) {
      this.medicationData.reminders = [];
      let weeknum = 1;
      switch(this.schedule)
      {
        case 1: // case of Daily
          console.warn('initate reminder columns for Daily schedule');
          for(let i = 1; i <= times; i++) {
              this.medicationData.reminders.push({value: i + " 0 1"});
          }
          break;
        case 2: // case of Weekly
          console.warn('initate reminder columns for Weekly schedule');
          for(let i = 1; i <= times; i++) {
            if(weeknum > 7)
              weeknum = 1;
            this.medicationData.reminders.push({value: weeknum + " 8 0 1"});
            weeknum++;
          }
          break;
        default:
          break;
      }
    }
  }

  selectForm () {
    this.selecting.form = !this.selecting.form;
  }

  selectColor1 () {
    this.selecting.color1 = !this.selecting.color1;
  }

  selectColor2 () {
    this.selecting.color2 = !this.selecting.color2;
  }

  enterNote () {
    this.selecting.note = !this.selecting.note;
    this.note_template = this.medicationData.note;
  }

  setForm (val) {
    this.medicationData.form = val;
    this.medicationData.form_Id = val.id;
    this.selecting.form = false;
  }

  setColor1 (val) {
    this.medicationData.color1 = val;
    this.medicationData.color1_Id = val.id;
    this.selecting.color1 = false;
  }

  setColor2 (val) {
    this.medicationData.color2 = val;
    this.medicationData.color2_Id = val.id;
    this.selecting.color2 = false;
  }

  noteCancel () {
    this.selecting.note = false;
  }

  noteSave () {
    if (!this.note_template) {
      this.note_template = '';
    }
    this.selecting.note = false;
    this.medicationData.note = this.note_template;
  }

  checkValidate() {
    let retVal = true;
    if(!this.medicationData.name || !this.medicationData.dose) {
      return false;
    }
    return retVal;
  }

  onCancel () {
    this.viewCtrl.dismiss();
  }

  onSave () {
    console.log(this.medicationData);
    if(this.checkValidate()) {
      this.remindersService.update(this.medicationData)
      .then((res) => {
        console.log(res);
        this.viewCtrl.dismiss();
      }, (err) => {
        console.log(err);
      });
    } else {
      let alert = this.alertController.create({
        title: 'Warning',
        subTitle: 'Please fill in the fields required in red.',
        buttons: ['OK']
      });
      alert.present();
    }
  }
}
