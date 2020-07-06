import { EventElement } from './../shared/event.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('gameEmitter') emitter = new EventEmitter<EventElement>();//Custom event 'gameEmitter'
  counter: number = 1;
  gameReference;

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    console.log("Starting game....");
    this.gameReference = setInterval(() => {
      this.emitter.emit(new EventElement(this.counter++));
    }, 2000);
  }

  stopGame() {
    console.log("Stopping game....");
    clearInterval(this.gameReference);
  }
}
