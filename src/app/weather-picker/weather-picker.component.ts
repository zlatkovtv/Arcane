import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
	selector: 'app-weather-picker',
	templateUrl: './weather-picker.component.html',
	styleUrls: ['./weather-picker.component.scss']
})
export class WeatherPickerComponent implements OnInit {
	constructor(
		public dialogRef: MatDialogRef<WeatherPickerComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) { }

	ngOnInit(): void {
	}

	onNoClick(): void {
		this.dialogRef.close();
	}
}
