import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //title = 'app';
  loadedFeature = 'recipe';

  onNavigate(feature:string){
      this.loadedFeature = feature;
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCMSRKzLEi9N99V4xbDVRuL-XEOz2bCNv8",
      authDomain: "ng-recipe-book-34429.firebaseapp.com"
    });
  }
}
