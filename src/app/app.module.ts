import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatCardModule, MatButtonModule, MatListModule, MatProgressSpinnerModule, MatSidenavModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { NewsComponent } from './news/news.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { CryptoComponent } from './crypto/crypto.component';
import { WeatherComponent } from './weather/weather.component';
import { CoinInfoComponent } from './coin-info/coin-info.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SearchComponent,
    NewsComponent,
    SpotifyComponent,
    CryptoComponent,
    WeatherComponent,
    CoinInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
		{
			path: '',
			redirectTo: '/Dashboard',
			pathMatch: 'full'
		},
		{
			path: 'Dashboard',
			component: DashboardComponent
    },
    {
      path: 'search',
      component: SearchComponent
    }
	]),
  MatToolbarModule,
  MatCardModule,
  FlexLayoutModule,
  MatButtonModule,
  HttpClientModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatIconModule,
  BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
