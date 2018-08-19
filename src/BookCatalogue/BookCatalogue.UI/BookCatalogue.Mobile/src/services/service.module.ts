import { NgModule } from "@angular/core";
import { AuthorService } from "./author.service";
import { BookService } from "./book.service";

@NgModule({
    imports: [],
    providers: [
        AuthorService,
        BookService
    ]
})
export class ServiceModule {}