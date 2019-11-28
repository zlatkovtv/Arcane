import { Component, OnInit, Input } from '@angular/core';

import { CoinData } from '../coindata';

@Component({
	selector: 'app-coin-info',
	templateUrl: './coin-info.component.html',
	styleUrls: ['./coin-info.component.css']
})
export class CoinInfoComponent implements OnInit {
	@Input() coinData: CoinData;

	constructor() { }

	ngOnInit() {
	}

}
