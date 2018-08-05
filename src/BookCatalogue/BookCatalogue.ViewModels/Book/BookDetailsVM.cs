using System.Collections.Generic;
using BookCatalogue.ViewModels.Author;

namespace BookCatalogue.ViewModels.Book
{
    public class BookDetailsVM : BaseBookVM
    {
        public int Rating { get; set; }
        public IEnumerable<BaseAuthorVM> Authors { get; set; }
    }
}
