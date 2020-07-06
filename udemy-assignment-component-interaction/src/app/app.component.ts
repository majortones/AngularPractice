import { EventElement } from './shared/event.model';
import { element } from 'protractor';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-assignment-component-interaction';
  oddNums: number[] = [];
  evenNums: number[] = [];

  createNumbersWithEvent(childEvent: EventElement) {
    console.log(childEvent.oddEven);
    if((childEvent.oddEven & 1) === 0) {
      console.log("Even number : " + childEvent.oddEven);
      this.evenNums.push(childEvent.oddEven);
    } else {
      this.oddNums.push(childEvent.oddEven);
    }
  }
}
