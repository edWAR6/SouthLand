import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { PromotionsPage } from '../promotions/promotions';
import { PhotosPage } from '../photos/photos';
import { VideosPage } from '../videos/videos';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PromotionsPage;
  tab3Root = PhotosPage;
  tab4Root = VideosPage;
  tab5Root = ContactPage;

  constructor() {

  }
}
