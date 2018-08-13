import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { AuthorService } from "./author.service";
import { BookService } from "./book.service";

@NgModule({
    imports: [
        IonicModule.forRoot()
    ],
    providers: [
        AuthorService,
        BookService
    ]
})
export class ServiceModule {}