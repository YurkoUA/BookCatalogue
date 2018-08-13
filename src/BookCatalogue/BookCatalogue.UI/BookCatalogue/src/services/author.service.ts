import { Injectable } from "@angular/core";
import { BaseRestApiService } from "../core/api/base-rest.api-service";
import { Observable } from "rxjs";
import { Author } from "../models/author";

@Injectable()
export class AuthorService extends BaseRestApiService {
    getAllAuthors(): Observable<Author[]> {
        return this.get('api/author');
    }

    getAuthorById(id: number): Observable<Author> {
        return this.get('api/author', { id: id });
    }

    createAuthor(author: Author): Observable<number> {
        return this.post<Author, number>('api/author', author);
    }

    editAuthor(id: number, author: Author): Observable<boolean> {
        return this.put('api/author', author, { id: id });
    }

    deleteAuthor(id: number): Observable<boolean> {
        return this.delete('api/author', { id: id });
    }
}