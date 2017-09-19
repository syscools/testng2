import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Chess Blog';
  count : Number = 0;
  constructor() {
    /*
    setInterval(function(this){ 
      this.count++;
      console.log("count = " + this.count);
      }, 3000);
    */
  }
}
