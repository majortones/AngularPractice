import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-assignment-first';
  isHidden: boolean = false;
  clickedTimes = [];
  counter:number = 0;

  hideUnhide() {
    this.isHidden = !this.isHidden;
    console.log(this.isHidden);
    this.counter = this.counter+1;
    this.clickedTimes.push(this.counter);
    console.log("Length :: " + this.clickedTimes.length);
  }

  applyBackground() {
    console.log('applyBackground() called...');
    console.log(this.counter);
    if(this.counter > 5) {
      return "green";
    } else {
      return "white";
    }
  }
}
