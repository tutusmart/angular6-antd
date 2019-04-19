import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.styl']
})
export class MyCompComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log(this);
  }

}
