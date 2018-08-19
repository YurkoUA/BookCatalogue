import { NgModule } from "@angular/core";
import { AuthorService } from "./author.service";
import { BookService } from "./book.service";
import { SpinnerService } from "./spinner.service";

@NgModule({
    imports: [],
    providers: [
        AuthorService,
        BookService,

        SpinnerService
    ]
})
export class ServiceModule {}