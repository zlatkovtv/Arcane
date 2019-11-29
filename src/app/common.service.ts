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
const TODO_PATH = "http://localhost:5000/api/todo";

@Injectable({
	providedIn: 'root'
})
export class CommonService {
	constructor(private http: HttpClient) { }

	// news
	getArticles(source: string): Observable<ArticleContainer> {
		return this.http.get<ArticleContainer>(NEWS_PATH + "/" + source, {});
	}

	getNewsSources(): Observable<any> {
		return this.http.get<any>(NEWS_PATH + "/sources", {});
	}

	addNewsToFavourites(newsAction: any): Observable<any> {
		return this.http.post<any>(NEWS_PATH, newsAction, httpOptions);
	}

	// crypto
	getCoinData(): Observable<CoindataContainer> {
		return this.http.get<CoindataContainer>(CRYPTO_PATH, {});
	}

	// weather
	getWeather(city: string, country: string): Observable<any> {
		return this.http.get<any>(WEATHER_PATH + `/${city}/${country}`, {});
	}

	// todo
	saveTodo(userId: number, todo: string): Observable<any> {
		var payload = {
			userId,
			description: todo
		};

		return this.http.post<any>(TODO_PATH, payload, httpOptions);
	}

	completeTodo(userId: number, todo: string): Observable<any> {
		var payload = {
			userId,
			description: todo
		};

		const options = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
			}),
			body: payload
		};

		return this.http.delete<any>(TODO_PATH, options);
	}

	getTodos(userId: number): Observable<any> {
		return this.http.get<any>(TODO_PATH + `/${userId}`, {});
	}
}
