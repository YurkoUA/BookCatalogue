import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthorDetailsPage } from './author-details';

@NgModule({
  declarations: [
    AuthorDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthorDetailsPage),
  ],
})
export class AuthorDetailsPageModule {}
