import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnName:string="Show Your Loveble Person";
  counter:number =0;
  myfunction(name:string):void{
    
    this.counter++;
    console.log(name+' Love You Sutopa => '+this.counter);

  }
}
