import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { InboxDetailsPage } from '../inbox-details/inbox-details';

@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html'
})
export class InboxPage {

  items: Array<{date:string, title:string, description:string, show: boolean, value:string}>;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
  ) {

    this.items = [ {date:'4:59pm', title:'Type 1 Diabetes Cure!',
                    description:'Multi-line lists are identical to regular lists, except items have multiple lines of text.', show: true, value: 'aa'},
                    {date:'Yesterday', title:'Sliding items can be swiped to the left or right to reveal a hidden set of buttons',
                    description:'Below is an example with three lines of text.', show: true, value: 'bb'},
                    {date:'8/17/2017', title:'Skylar is crazy!', description:'Type 1 Diabetes Cure', show: false, value: 'aa'},
                    {date:'Yesterday', title:'Sliding items can be swiped to the left or right to reveal a hidden set of buttons', description:'Below is an example with three lines of text.',
                     show: false, value:'bb'},
              ];
  }
  goInboxDetailsPage(event, items){
    console.log('go AddCategory Page');
    this.navCtrl.push(InboxDetailsPage, { data: items.value})
  }

}
