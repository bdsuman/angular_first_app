import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  description: string;
  done: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }
  addItem(description: string) {
    // replace unshift=> push list last insertion
    this.allItems.unshift({
      description,
      done: false
    });
  }
  removeItem(listIndex: number) {
    console.log(listIndex);
    this.allItems.splice(listIndex, 1);
   // array.splice(index, 1)
  }
}
