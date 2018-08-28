import { NgModule } from "@angular/core";
import { AuthorService } from "./author.service";
import { BookService } from "./book.service";
import { SpinnerService } from "./spinner.service";
import { ModelMapperService } from "./model-mapper.service";

@NgModule({
    imports: [],
    providers: [
        AuthorService,
        BookService,

        SpinnerService,

        ModelMapperService
    ]
})
export class ServiceModule {}