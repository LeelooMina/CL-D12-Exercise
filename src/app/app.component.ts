import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CL-D12-Exercise';
  width: number = 300;
  height: number = 400;

  onClick(){
    console.log("This is a message, logged in the console.");
  }
}
