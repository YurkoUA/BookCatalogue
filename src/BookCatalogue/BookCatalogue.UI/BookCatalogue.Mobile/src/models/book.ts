import { Author } from "./author";

export class Book {
    Id: number;
    Title: string;
    Pages: number;
    Rating: number;
    PublishedDate: Date;
    Authors: Author[];
}