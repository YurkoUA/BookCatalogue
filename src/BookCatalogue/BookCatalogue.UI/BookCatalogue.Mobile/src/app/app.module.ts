import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthorsListPage } from '../pages/authors-list/authors-list';
import { ComponentsModule } from '../components/components.module';
import { ServiceModule } from '../services/service.module';
import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthorDetailsPage } from '../pages/author-details/author-details';
import { BookDetailsPage } from '../pages/book-details/book-details';
import { RatingComponent } from '../components/rating/rating';
import { AuthorCreatePage } from '../pages/author-create/author-create';
import { MenuPage } from '../pages/menu/menu';
import { BooksListPage } from '../pages/books-list/books-list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,

    AuthorsListPage,
    AuthorDetailsPage,
    AuthorCreatePage,
    MenuPage,

    BooksListPage,
    BookDetailsPage
  ],
  imports: [
    ServiceModule,
    CoreModule,
    ComponentsModule,
    
    BrowserModule,
    HttpClientModule,

    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,

    AuthorsListPage,
    AuthorDetailsPage,
    AuthorCreatePage,

    BooksListPage,
    BookDetailsPage,

    RatingComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
