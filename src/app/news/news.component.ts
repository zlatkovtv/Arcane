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
}
