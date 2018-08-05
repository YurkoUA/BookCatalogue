using System.Collections.Generic;

namespace BookCatalogue.ViewModels.Book
{
    public class BookCreateVM : BaseBookVM
    {
        public IEnumerable<long> AuthorsIds { get; set; }
    }
}
