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
		this.commonService.getWeather().subscribe(
			data => {
				this.city = data.city.name;
				this.country = data.city.country;
				this.today = this.buildDay(data.list[0]);
				
				this.next3Days = [
					this.buildDay(data.list[1]),
					this.buildDay(data.list[2]),
					this.buildDay(data.list[3])
				];
			},
			error => {
				console.log(error);
			}
		);
	}

	private buildDay(dayInfo: any) {
		return {
			temperature: dayInfo.main.temp - 273.15,
			description: dayInfo.weather[0].main,
			getIconUrl() {
				return `http://openweathermap.org/img/wn/${dayInfo.weather[0].icon}@2x.png`;
			},
			getDayOfWeek() {
				var date: Date = new Date(dayInfo.dt_txt);
				var dayOfWeek = DAYS[date.getDay()];
				return dayOfWeek;
			}
		}
	}
}
