import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Output() newCarSelectedEmitter = new EventEmitter;
  cars!: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.cars = [
      {
        id: 0,
        brandname: 'Renault',
        modelname: 'Clio'
      },
      {
        id: 1,
        brandname: 'Peujeot',
        modelname: '206'
      },
    ];

    this.newCarSelectedEmitter.emit(this.cars[0]);
  }

  showDetailsSectedCar(carId) {
    this.newCarSelectedEmitter.emit(this.cars[carId]);
  }

}
