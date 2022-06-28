import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: '[app-table-line]',
  templateUrl: './table-line.component.html',
  styleUrls: ['./table-line.component.css']
})
export class TableLineComponent implements OnInit {

  @Input() id!: string;
  @Input() brandname!: string;
  @Input() modelname!: string;

  @Output() showDetailEmmiter = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onClickShowDetail() {
    this.showDetailEmmiter.emit(+this.id);
  }

}
