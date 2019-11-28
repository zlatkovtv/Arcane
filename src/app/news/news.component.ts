import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { SourcePickerComponent } from '../source-picker/source-picker.component';

import { CommonService } from '../common.service';
import { Article } from '../article';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
	articles: Article[];
	sources: any[];
	currentIndex: number;
	currentArticle: Article;

	constructor(private commonService: CommonService, private sourcePicker: MatBottomSheet) {
		this.currentIndex = 0;
	}

	ngOnInit() {
		this.getArticles();
		this.getSources();
	}

	getArticles() {
		var source = localStorage.getItem('newsSource') || '';
		this.commonService.getArticles(source).subscribe(
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

	getSources() {
		this.commonService.getNewsSources().subscribe(
			sources => {
				this.sources = sources.sources;
			},
			error => {
				console.log(error);
			}
		);
	}

	openSourcePicker() {
		var options = {
			data: this.sources
		};
		
		const pickerRef: MatBottomSheetRef = this.sourcePicker.open(SourcePickerComponent, options);
		pickerRef.afterDismissed().subscribe((source) => {
			localStorage.setItem('newsSource', source);
			this.getArticles();
		});
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
