import { Component, OnInit } from '@angular/core';

import { CommonService } from '../common.service';
import { CoinData } from '../coindata'

@Component({
	selector: 'app-crypto',
	templateUrl: './crypto.component.html',
	styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {
	coinData: CoinData[];

	constructor(private commonService: CommonService) { }

	ngOnInit() {
		this.getCoinPrices();
	}

	getCoinPrices() {
		this.commonService.getCoinPrices().subscribe(
			coinDataContainer => {
				this.coinData = Object.values(coinDataContainer.data);
			},
			error => {
				console.log(error);
			}
		); 
	}
}
