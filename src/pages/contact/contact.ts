import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  private element: HTMLElement;
  map: GoogleMap;
  location: LatLng;

  constructor(public navCtrl: NavController, private googleMaps: GoogleMaps) {
    this.location = new LatLng(-34.9290,138.6010);      
  }

  ionViewDidLoad(){
    this.loadMap();
  }

  ionViewWillEnter(): void {
    document.getElementsByClassName('nav-decor')[0].className += ' hide';
  }

  ionViewWillLeave(): void {
    document.getElementsByClassName('nav-decor')[0].className = 'nav-decor';
  }

  loadMap(){
    this.element = document.getElementById('map');
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.location.lat,
          lng: this.location.lng
        },
        zoom: 18,
        tilt: 30
      }
    };
    this.map = this.googleMaps.create(this.element, mapOptions);

    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log('Map is ready!');
      this.map.addMarker({
        title: 'South Land',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: this.location.lat,
          lng: this.location.lng
        }
      });
    });
    // this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
    //   // let position: CameraPosition = {
    //   //   target: this.location,
    //   //   zoom: 12,
    //   //   tilt: 30
    //   // };
    //   // this.map.moveCamera(position);
    // });
  }

}
