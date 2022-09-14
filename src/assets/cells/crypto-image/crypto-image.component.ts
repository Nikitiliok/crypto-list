import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

export interface Image {
  image: string,
}

@Component({
  selector: 'app-crypto-image',
  templateUrl: './crypto-image.component.html',
  styleUrls: ['./crypto-image.component.scss'],
})
export class CryptoImageComponent implements OnInit, ICellRendererAngularComp{

  name!: string;
  symbol!: string;
  image!: string;
  id!: string;

  constructor() { }
  agInit(params: ICellRendererParams & Image): void {
    this.image = params.value.image;
    this.name = params.value.name;
    this.symbol = params.value.symbol;
    this.id = params.value.id;
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false;
  }

  ngOnInit(): void {
  }

}
