import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
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
		var city = localStorage.getItem('city') || "Los Angeles";
		var country = localStorage.getItem('country') || "US";
		
		this.commonService.getWeather(city, country).subscribe(
			data => {
				this.city = data.city.name;
				this.country = data.city.country;
				this.today = this.buildDay(data.list[0]);
				
				this.next3Days = data.list.map(el => this.buildDay(el));
			},
			error => {
				console.log(error);
			}
		);
	}

	chooseLocation() {

	}

	private buildDay(dayInfo: any) {
		var date: Date = new Date(dayInfo.dt_txt);
		return {
			temperature: dayInfo.main.temp - 273.15,
			description: dayInfo.weather[0].main,
			getIconUrl() {
				return `http://openweathermap.org/img/wn/${dayInfo.weather[0].icon}@2x.png`;
			},
			getDayOfWeek() {
				var dayOfWeek = DAYS[date.getDay()];
				return dayOfWeek;
			},
			getHour() {
				var minutes = (date.getMinutes()<10?'0':'') + date.getMinutes();
				return date.getHours() + ":" + minutes;
			}
		}
	}
}
