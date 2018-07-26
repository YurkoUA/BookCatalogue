using System;
using System.Collections.Generic;
using System.Text;

namespace BookCatalogue.Data.Entities
{
    public class BookEM
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Pages { get; set; }
        public int Rating { get; set; }
        public IEnumerable<AuthorEM> Authors { get; set; }
    }
}
