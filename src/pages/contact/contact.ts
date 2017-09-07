import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {
  Geocoder,
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker,
  GoogleMapsMapTypeId
} from '@ionic-native/google-maps'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  private element: HTMLElement;
  map: GoogleMap;
  location: LatLng;

  constructor(public navCtrl: NavController, public platform: Platform, private googleMaps: GoogleMaps) {
    this.location = new LatLng(-34.9290,138.6010);
    platform.ready().then(() => {
      this.loadMap();
    });
  }

  ionViewWillEnter(): void {
    document.getElementsByClassName('nav-decor')[0].className += ' hide';
    // document.querySelector('.transport-page').setAttribute("hidden", "");
  }

  ionViewWillLeave(): void {
    document.getElementsByClassName('nav-decor')[0].className = 'nav-decor';
    // document.querySelector('.transport-page').removeAttribute("hidden");
  }

  loadMap(){
    this.element = document.getElementById('map');
    this.map = this.googleMaps.create(this.element);

    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
      // let position: CameraPosition = {
      //   target: this.location,
      //   zoom: 12,
      //   tilt: 30
      // };
      // this.map.moveCamera(position);
    });
  }

}
