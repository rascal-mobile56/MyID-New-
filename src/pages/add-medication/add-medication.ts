import { Component} from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { BaseMedicineService } from "../../providers/base-medicine-service";
import { RemindersService } from '../../providers/reminders-service';
@Component({
  selector: 'add-medication',
  templateUrl: 'add-medication.html'
})
export class AddMedicationPage {



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
  public loaded: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    public baseMedicineService: BaseMedicineService,
    public remindersService: RemindersService,
    public alertController: AlertController
  ) {
      this.medicationData.dependent_id = this.navParams.get("id");
      console.log(this.medicationData.dependent_id);
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

      this.medicationData.form_Id = 1;
      this.medicationData.color1_Id = 1;
      this.medicationData.color2_Id = 1;
      this.medicationData.frequency = "3 times 1";
      this.medicationData.note = "";
      this.medicationData.visible = true;
      this.note_template = "";
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
    this.baseMedicineService.getColor(this.medicationData.color1_Id)
    .then((res) => {
      this.color1 = res;

      this.baseMedicineService.getColor(this.medicationData.color2_Id)
      .then((res) => {
        this.color2 = res;

        this.baseMedicineService.getForm(this.medicationData.form_Id)
        .then((res) => {
          this.form = res;
          this.loaded = true;
          console.log(res);
        }, (err) => {
          console.log(err)
        })
      }, (err) => {
        console.log(err)
      })
    }, (err) => {
      console.log(err)
    })
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
    this.form = val;
    this.medicationData.form_Id = val.id;
    this.selecting.form = false;
  }

  setColor1 (val) {
    this.color1 = val;
    this.medicationData.color1_Id = val.id;
    this.selecting.color1 = false;
  }

  setColor2 (val) {
    this.color2 = val;
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
    this.navCtrl.pop();
  }

  onSave () {
    console.log(this.medicationData);
    if(this.checkValidate()) {
      this.remindersService.add(this.medicationData)
      .then((res) => {
        if (res == 'exist') {
          let alert0 = this.alertController.create({
            title: 'Warning',
            subTitle: 'This meditation is already added for this dependent.',
            buttons: ['OK']
          });
          alert0.present();
        } else {
          this.navCtrl.pop();
        }
      }, (err) => {
        console.log(err);
      })
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
