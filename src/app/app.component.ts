import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDQ0juFxa8z-rHnN48_S9la8ot5te-5nqk',
      authDomain: 'ng-recipe-book-2b2e7.firebaseapp.com'
    });
  }

  onNavigate(feature) {
    this.loadedFeature = feature;
  }
}
