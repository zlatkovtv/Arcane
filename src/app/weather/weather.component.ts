import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
	private city: string;
	private country: string;
	private today: any;
	private next3Days: any[];

	constructor(private commonService: CommonService) { }

	ngOnInit() {
		this.getWeather();
	}

	getWeather() {
		this.commonService.getWeather().subscribe(
			data => {
				console.log(data);
				this.city = data.city.name;
				this.country = data.city.country;
				this.today = {
					temperature: data.list[0].main.temp - 273.15,
					description: data.list[0].weather[0].main
				};
				
				this.next3Days = [
					{
						temperature: data.list[1].main.temp - 273.15,
						description: data.list[1].weather[0].main
					},
					{
						temperature: data.list[2].main.temp - 273.15,
						description: data.list[2].weather[0].main
					},
					{
						temperature: data.list[3].main.temp - 273.15,
						description: data.list[3].weather[0].main
					}
				];
			},
			error => {
				console.log(error);
			}
		);
	}

}
