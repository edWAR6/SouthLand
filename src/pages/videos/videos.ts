import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

/**
 * Generated class for the VideosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {  
  videos: any[] = new Array();

  constructor(private domSanitizer: DomSanitizer, public navCtrl: NavController, public navParams: NavParams) {
    this.videos.push({
      videoUrl: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/dYo7kPKjGRg'),
      title: 'Elspec Equalizer systems',
      description: 'The EQUALIZER is the world’s fastest real-time power quality enhancement system optimizes all power quality factors and more, for a variety of dynamic fast changing balanced, unbalanced & single phase loads. The EQUALIZER features electronic switching of 5-20 Milliseconds @ 50 Hz, transient-free switching, voltage support, harmonic filtration, Flicker & current spike reduction.'
    });

    this.videos.push({
      videoUrl: this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/VsteTnRnQ0A'),
      title: 'ELSPEC energy saving strategies',
      description: 'This video gives an introduction to the requirements for and nett effects of ELSPEC Power Quality Solutions. ELSPEC where power meets quality'
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideosPage');
  }

}
