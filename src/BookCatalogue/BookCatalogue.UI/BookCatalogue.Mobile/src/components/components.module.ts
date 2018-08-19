import { NgModule } from '@angular/core';
import { ScrollingComponent } from './scrolling/scrolling';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
@NgModule({
	declarations: [ScrollingComponent],
	imports: [],
	exports: [ScrollingComponent],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class ComponentsModule {}
