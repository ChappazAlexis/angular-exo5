import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  car: any;

  constructor() {
    this.car = {
      brandname: 'Chargement...',
      modelname: 'Chargement...'
    };
  }
    updateSelectedCar(car: any) {
      this.car = car;
  }
}
