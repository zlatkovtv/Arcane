import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Weather } from '../weather';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
	private weatherData: Weather;

	constructor(private commonService: CommonService) { }

	ngOnInit() {
		this.getWeather();
	}

	getWeather() {
		this.commonService.getWeather().subscribe(
			weatherData => {
				this.weatherData = weatherData;
			},
			error => {
				console.log(error);
			}
		);
	}

}
