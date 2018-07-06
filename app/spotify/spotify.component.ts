import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
	selector: 'app-spotify',
	templateUrl: './spotify.component.html',
	styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit {
	isSpotifyEnabled: boolean = false;
	isLoading: boolean = false;

	constructor() { }

	ngOnInit() {
	}

	login() {
		this.isLoading = true;

		setTimeout(() => {   
			this.isSpotifyEnabled = true;
			this.isLoading = false;
	   }, 2000);
	}
}
