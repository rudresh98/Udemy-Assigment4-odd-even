import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumber: number[] = []
  evenNumber: number[] = []

  intervalFired(event) {
    console.log("hello", event);
    if (event % 2 === 0) {
      this.evenNumber.push(event)
    }
    else {
      this.oddNumber.push(event)
    }
  }
  clear(event) {
    console.log(event);
    // this.evenNumber = []
    // this.oddNumber = []
    if (event === 0) {
      this.evenNumber = []
      this.oddNumber = []
    }
  }
}
