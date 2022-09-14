import { NgModule }      from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CoinListComponent } from './components/coin-list/coin-list.component';
import { CoinComponent } from './components/coin/coin.component';
 
const appRoutes: Routes =[
    { path: 'coins', component: CoinListComponent },
    { path: 'coins/:id', component: CoinComponent},
];
 
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }