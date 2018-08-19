import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthorCreatePage } from './author-create';

@NgModule({
  declarations: [
    AuthorCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(AuthorCreatePage),
  ],
})
export class AuthorCreatePageModule {}
