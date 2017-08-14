import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { RemindersPage } from '../reminders/reminders';
import { InboxPage } from '../inbox/inbox';
import { MorePage } from '../more/more';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProfilePage;
  tab3Root = RemindersPage;
  tab4Root = InboxPage;
  tab5Root = MorePage;

  constructor() {

  }
}
