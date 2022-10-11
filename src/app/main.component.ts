import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
	count: Observable<number> = new Observable();
	constructor() {}
	ngOnInit(): void {}
}
