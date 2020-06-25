import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  //data binding
  //event binding
  user = {
    name: 'hieu',
    age :30
  }
  onClick(){
    console.log("haha");
  }
}
