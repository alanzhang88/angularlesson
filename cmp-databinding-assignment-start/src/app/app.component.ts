import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recvCounter: number;

  onStartGame(data:{ counter: number }){
    this.recvCounter = data.counter;
  }

}
