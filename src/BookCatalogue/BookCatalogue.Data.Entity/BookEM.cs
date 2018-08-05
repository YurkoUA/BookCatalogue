using Dapper.Contrib.Extensions;
using System.Collections.Generic;

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

        [Write(false)]
        public IEnumerable<AuthorEM> Authors { get; set; }
    }
}
