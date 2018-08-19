import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScrollingComponent } from './scrolling/scrolling';

@NgModule({
	declarations: [ScrollingComponent],
	imports: [],
	exports: [ScrollingComponent],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class ComponentsModule {}
