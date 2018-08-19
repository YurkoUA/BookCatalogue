import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScrollingComponent } from './scrolling/scrolling';
import { BooksGridComponent } from './books-grid/books-grid';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating/rating';

@NgModule({
	declarations: [
		ScrollingComponent,
		BooksGridComponent,
    	RatingComponent
	],
	imports: [
		IonicModule,
		CommonModule
	],
	exports: [
		ScrollingComponent,
		BooksGridComponent,
    	RatingComponent
	],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class ComponentsModule {}
