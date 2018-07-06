import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Article } from '../article';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
	articles: Article[];
	constructor(private commonService: CommonService) { }

	ngOnInit() {
		this.getArticles();
	}

	getArticles() {
		this.commonService.getArticles().subscribe(
			articleContainer => {
				this.articles = articleContainer.articles;
			},
			error => {
				console.log(error);
			}
		); 
	}

}
