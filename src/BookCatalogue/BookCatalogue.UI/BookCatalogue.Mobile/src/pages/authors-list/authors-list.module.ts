import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthorsListPage } from './authors-list';

@NgModule({
  declarations: [
    AuthorsListPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthorsListPage),
  ],
})
export class AuthorsListPageModule {}
