import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ArticleContainer } from './article';
import { CoindataContainer } from './coindata';

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
		var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a27a93737fea40a98aeb5b31071bf2d1";
		return this.http.get<ArticleContainer>(url, {});
	}

	getCoinPrices(): Observable<CoindataContainer> {
		var url = "https://api.coinmarketcap.com/v2/ticker/?limit=10";
		return this.http.get<CoindataContainer>(url, {});
	}
}
