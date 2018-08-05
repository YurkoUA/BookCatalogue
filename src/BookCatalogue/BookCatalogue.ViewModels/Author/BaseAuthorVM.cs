namespace BookCatalogue.ViewModels.Author
{
    public class BaseAuthorVM
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public long? BooksCount { get; set; }
    }
}
