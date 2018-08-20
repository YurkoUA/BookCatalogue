export class BookCreateModel {
    Title: string;
    Pages: number;
    PublishedDate: Date;
    AuthorsIds: number[] = [];
}