import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatCardModule, MatButtonModule, MatListModule, MatProgressSpinnerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { NewsComponent } from './news/news.component';
import { SpotifyComponent } from './spotify/spotify.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SearchComponent,
    NewsComponent,
    SpotifyComponent
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
  MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
