import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { CryptoImageComponent } from '../../../assets/cells/crypto-image/crypto-image.component';
import { LowerHigherComponent } from '../../../assets/cells/lower-higher/lower-higher.component';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss'],
})
export class CoinListComponent implements OnInit {
  bitcoin: any[] = [];
  response: any;

  colDefs: ColDef[] = [
    {
      field: 'number',
      headerName: "#",
      maxWidth: 70,
    },
    {
      field: 'coin',
      cellRenderer: CryptoImageComponent,
      maxWidth: 300,
    },
    {
      field: 'price',
    },
    {
      field: 'oneDay',
      headerName: '1d',
      cellRenderer: LowerHigherComponent,
      maxWidth: 80,
      sortable: true,
    },
    {
      field: 'volumeTF',
      headerName: 'Volume 24h',
    },
    {
      field: 'mkt',
    },
    {
      field: 'supply'
    },
    {
      field: 'totalSupply',
      headerName: 'Total supply'
    }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .subscribe(response => {
      this.response = response;

      const arr = [];

      for (let i = 0; i < response.length; i++) {
        const myResponse = {
          number: i+1,
          coin: {
            name: response[i].name,
            symbol: response[i].symbol,
            image: response[i].image,
            id: response[i].id,
          },
          price: response[i].current_price.toLocaleString('en-US', {style: 'currency', currency: 'usd'}),
          oneDay: response[i].market_cap_change_percentage_24h,
          volumeTF: response[i].total_volume.toLocaleString(),
          mkt: response[i].market_cap.toLocaleString(),
          supply: (response[i].market_cap / response[i].current_price).toLocaleString(),
          totalSupply: (response[i].total_supply ? response[i].total_supply.toLocaleString() : null),
        }

        arr.push(myResponse);
      }

      this.bitcoin = arr;
    });
  }

  check() {
    console.log(this.response);
    console.log(this.bitcoin);
  }
}
