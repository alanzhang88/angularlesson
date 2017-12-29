import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() startGame = new EventEmitter<{counter: number}>();

  counter = 0;
  ref = null;
  constructor() { }

  ngOnInit() {
    //console.log(this.startGame);
  }

  increCounterAndEmit(){
    this.counter += 1;
    // console.log(this.counter);
    // console.log(this.startGame);
    this.startGame.emit({counter: this.counter});
  }

  onStart(){
    if(!this.ref)this.ref = setInterval(()=>{this.increCounterAndEmit();},1000);
  }

  onStop(){
    if(this.ref){
      clearInterval(this.ref);
      this.counter = 0;
    }
    this.ref = null;
  }

}
