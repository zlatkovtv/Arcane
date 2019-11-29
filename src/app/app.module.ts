import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatCardModule, MatButtonModule, MatListModule, MatProgressSpinnerModule, 
	MatSidenavModule, MatIconModule, MatBottomSheetModule, MatDialogModule, MatInputModule, MatCheckboxModule,
	MatSnackBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { NewsComponent } from './news/news.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { CryptoComponent } from './crypto/crypto.component';
import { WeatherComponent } from './weather/weather.component';
import { CoinInfoComponent } from './coin-info/coin-info.component';
import { TodoComponent } from './todo/todo.component';
import { SourcePickerComponent } from './source-picker/source-picker.component';
import { WeatherPickerComponent } from './weather-picker/weather-picker.component';

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
		CoinInfoComponent,
		TodoComponent,
		SourcePickerComponent,
		WeatherPickerComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot([
			{
				path: '',
				redirectTo: '/dashboard',
				pathMatch: 'full'
			},
			{
				path: 'dashboard',
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
		MatBottomSheetModule,
		MatDialogModule,
		MatInputModule,
		MatCheckboxModule,
		MatSnackBarModule,
		BrowserAnimationsModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent],
	entryComponents: [SourcePickerComponent, 
	WeatherPickerComponent],
})
export class AppModule { }
