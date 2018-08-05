using System;
using System.Collections.Generic;
using Dapper.Contrib.Extensions;

namespace BookCatalogue.Data.Entity
{
    [Table("Book")]
    public class BookEM
    {
        [Key]
        public long Id { get; set; }
        public string Title { get; set; }
        public int Pages { get; set; }
        public int Rating { get; set; }
        public DateTime PublishedDate { get; set; }

        [Write(false)]
        public IEnumerable<AuthorEM> Authors { get; set; }
    }
}
