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

	getArticles(source: string): Observable<ArticleContainer> {
		return this.http.get<ArticleContainer>(NEWS_PATH + "/" + source, {});
	}

	getNewsSources(): Observable<any> {
		return this.http.get<any>(NEWS_PATH + "/sources", {});
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
