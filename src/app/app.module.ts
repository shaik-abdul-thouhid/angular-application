import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { counterReducer } from '../state-management/test.reducers';

@NgModule({
	declarations: [
		MainComponent,
		FooterComponent,
		NavigationComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		BrowserAnimationsModule,
		StoreModule.forRoot({ count: counterReducer }, {}),
	],
	providers: [],
	bootstrap: [
		MainComponent,
		FooterComponent,
		NavigationComponent
	]
})
export class AppModule { }
