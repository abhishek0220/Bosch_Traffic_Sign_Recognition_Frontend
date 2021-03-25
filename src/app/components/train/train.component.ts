import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {
  ratioValue = 0;
  passKey = "";
  constructor() { }

  ngOnInit(): void {
  }
  formatLabel(value: number) {
    return value;
  }
  trainModel(){
    console.log(this.ratioValue, this.passKey)
  }
}
