import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html'
})
export class InboxPage {

  items: Array<{name:string, title:string, description:string}>;
  constructor(public navCtrl: NavController) {

    this.items = [ {name:'From MyID', title:'Type 1 Diabetes Cure!', description:'Multi-line lists are identical to regular lists, except items have multiple lines of text.'},
                {name:'Name', title:'Sliding items can be swiped to the left or right to reveal a hidden set of buttons', description:'Below is an example with three lines of text.'},
                {name:'From MyID', title:'Skylar is crazy!', description:'Type 1 Diabetes Cure'}
              ]
  }

}
