import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  medications: Array<{time: string, value: any}>;
  constructor(public navCtrl: NavController) {
    this.medications = [{time:'7:30 AM', value:'Lortab 3/235'},
                        {time:'12:30 PM', value:'Cymbalta'}];
  }

}
