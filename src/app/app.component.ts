import { getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'header';
  changeColor: string = "green";

  foods: string[] = [
    "chicken",
    "apple",
    "rice"
  ]

}
