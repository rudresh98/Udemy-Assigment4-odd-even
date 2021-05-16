import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  @Output("intFired") intervalFired = new EventEmitter<number>();
  @Output("clrFired") clrFired = new EventEmitter<number>();
  num;
  lastnumber = 0;
  constructor() { }

  ngOnInit(): void {
  }


  onStart() {
    this.num = setInterval(() => {
      this.intervalFired.emit(this.lastnumber)
      this.lastnumber++;
    }, 1000)
  }
  onPause() {
    console.log("onpause");
    clearInterval(this.num);

  }
  clrfield() {
    this.clrFired.emit(this.lastnumber = 0)
  }
}
