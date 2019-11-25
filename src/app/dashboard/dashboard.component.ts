import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	opened: boolean = false;

	constructor(private router: Router) 
	{
	}
  
	ngOnInit() {
	}

	goToSearch() {
		this.router.navigate(['/search']);
	}

	popSideMenu() {
		this.opened = !this.opened;
	}
}
