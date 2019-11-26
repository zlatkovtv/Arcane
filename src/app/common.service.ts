import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ArticleContainer } from './article';
import { CoindataContainer } from './coindata';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

const NEWS_PATH = "http://localhost:5000/api/news";
const CRYPTO_PATH = "http://localhost:5000/api/crypto";
const WEATHER_PATH = "http://localhost:5000/api/weather";

@Injectable({
	providedIn: 'root'
})
export class CommonService {
	constructor(private http: HttpClient) { }

	getArticles(): Observable<ArticleContainer> {
		// var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=eea0cad5f1cc448c9e742ca8dec8061d";
		return this.http.get<ArticleContainer>(NEWS_PATH, {});
	}

	getCoinData(): Observable<CoindataContainer> {
		return this.http.get<CoindataContainer>(CRYPTO_PATH, {});
	}

	getWeather(): Observable<any> {
		return this.http.get<any>(WEATHER_PATH, {});
	}

	addNewsToFavourites(newsAction: any): Observable<any> {
		return this.http.post<any>(NEWS_PATH, newsAction, httpOptions);
	}
}
