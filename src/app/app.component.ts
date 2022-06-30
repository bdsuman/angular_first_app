import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnName:string="Show Your Loveble Person";

  myfunction(name:string):void{
    console.log(name+' Love You Sutopa');
  }
}
