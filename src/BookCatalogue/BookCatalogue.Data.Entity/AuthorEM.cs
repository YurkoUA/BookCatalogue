using Dapper.Contrib.Extensions;
using System.Collections.Generic;

namespace BookCatalogue.Data.Entity
{
    [Table("Author")]
    public class AuthorEM
    {
        [Key]
        public long Id { get; set; }
        public string Name { get; set; }

        [Write(false)]
        public long BooksCount { get; set; }

        [Write(false)]
        public List<BookEM> Books { get; set; }
    }
}
