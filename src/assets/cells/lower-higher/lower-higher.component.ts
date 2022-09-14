import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-lower-higher',
  templateUrl: './lower-higher.component.html',
  styleUrls: ['./lower-higher.component.scss']
})
export class LowerHigherComponent implements OnInit, ICellRendererAngularComp {

  value!: number;

  constructor() { }
  agInit(params: ICellRendererParams<any, any>): void {
    this.value = params.value.toFixed(2);
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  ngOnInit(): void {
  }

}
