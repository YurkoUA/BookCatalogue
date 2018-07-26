using System;
using System.Collections.Generic;
using System.Text;

namespace BookCatalogue.Data.Entities
{
    public class AuthorEM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int BooksCount { get; set; }
    }
}
