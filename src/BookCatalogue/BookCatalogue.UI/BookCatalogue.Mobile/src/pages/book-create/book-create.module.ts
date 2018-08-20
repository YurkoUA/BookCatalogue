import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookCreatePage } from './book-create';

@NgModule({
  declarations: [
    BookCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(BookCreatePage),
  ],
})
export class BookCreatePageModule {}
