import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Article } from '../article';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
	articles: Article[];
	currentIndex: number;
	currentArticle: Article;

	constructor(private commonService: CommonService) {
		this.currentIndex = 0;
	}

	ngOnInit() {
		this.getArticles();
	}

	getArticles() {
		this.commonService.getArticles().subscribe(
			articleContainer => {
				this.articles = articleContainer.articles;
				if(this.articles.length === 0) {
					return;
				}

				this.currentArticle = this.articles[this.currentIndex];
				console.log(this.articles);
			},
			error => {
				console.log(error);
			}
		); 
	}

	cycleNews(advance: boolean) {
		if(advance) {
			this.currentIndex++;
		} else {
			this.currentIndex--;
		}

		this.currentArticle = this.articles[this.currentIndex];
	}

	addToFavourites() 
	{
		var newsAction = {
			userId: 0,
			newsHash: this.hashString(this.currentArticle.title)
		};

		this.commonService.addNewsToFavourites(newsAction).subscribe(
			newsAction => {
				alert('added');
			},
			error => {
				console.log(error);
			}
		)
	}

	private hashString(input: string) {
		return Array.from(input)
			.reduce((s, c) => Math.imul(31, s) + c.charCodeAt(0) | 0, 0)
	}
}
