import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: []
})
export class NavigationComponent implements OnInit {
  	constructor() {
		console.log('NavigationComponent initialized');
	}

	ngOnInit(): void {
	}
}
