using Dapper.Contrib.Extensions;

namespace BookCatalogue.Data.Entities
{
    [Table("Author")]
    public class AuthorEM
    {
        [Key]
        public long Id { get; set; }
        public string Name { get; set; }

        [Write(false)]
        public int BooksCount { get; set; }
    }
}
