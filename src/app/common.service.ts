import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ArticleContainer } from './article';
import { CoindataContainer } from './coindata';
import { Weather } from './weather';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
	providedIn: 'root'
})
export class CommonService {
	private articleContainer: ArticleContainer;
	constructor(private http: HttpClient) { }

	getArticles(): Observable<ArticleContainer> {
		// var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=eea0cad5f1cc448c9e742ca8dec8061d";
		var url = "http://localhost:5000/api/news"
		return this.http.get<ArticleContainer>(url, {});
	}

	getCoinData(): Observable<CoindataContainer> {
		var url = "http://localhost:5000/api/crypto";
		return this.http.get<CoindataContainer>(url, {});
	}

	getWeather(): Observable<Weather> {
		var url = "http://localhost:5000/api/weather";
		return this.http.get<Weather>(url, {});
	}
}
