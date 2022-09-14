import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {

  coin: any = 'some';
  count = 0;
  toggler: boolean = true;
  coinGecko = 'https://www.coingecko.com/en/coins/';
  progress: number = 0;
  currentPercentSupply: number = 0;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document,
  ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(response => {
      this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${response['id']}`)
      .subscribe(response => {
        const max = response.market_data.high_24h.usd;
        const min = response.market_data.low_24h.usd;
        const current = response.market_data.current_price.usd;

        this.coin = response;
        this.progress = ((max - min) - (max - current))*100 / (max - min);
        this.currentPercentSupply = response.market_data.circulating_supply*100 / response.market_data.total_supply;

        this.toggler = false;

        console.log(this.coin);
        console.log(this.progress);
      });
    });
  }

}
