import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { CryptoImageComponent } from '../assets/cells/crypto-image/crypto-image.component';
import { LowerHigherComponent } from '../assets/cells/lower-higher/lower-higher.component';
import { CoinListComponent } from './components/coin-list/coin-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CoinComponent } from './components/coin/coin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    CryptoImageComponent,
    LowerHigherComponent,
    CoinListComponent,
    CoinComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
