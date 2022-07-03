import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-test',
  templateUrl: './new-test.component.html',
  styleUrls: ['./new-test.component.css']
})
export class NewTestComponent implements OnInit {
  @Input('master') masterName = '';
  @Output() userName = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onCardClick(){
    this.userName.emit(this.masterName);
  }
}
