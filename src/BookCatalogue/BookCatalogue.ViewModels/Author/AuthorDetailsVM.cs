using System.Collections.Generic;
using BookCatalogue.ViewModels.Book;

namespace BookCatalogue.ViewModels.Author
{
    public class AuthorDetailsVM : BaseAuthorVM
    {
        public List<BookDetailsVM> Books { get; set; }
    }
}
