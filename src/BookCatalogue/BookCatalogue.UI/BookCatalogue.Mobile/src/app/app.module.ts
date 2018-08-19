import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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

@NgModule({
  declarations: [
    MyApp,
    HomePage,

    AuthorsListPage,
    AuthorDetailsPage
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

    AuthorsListPage,
    AuthorDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {}
