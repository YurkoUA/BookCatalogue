using System.Collections.Generic;

namespace BookCatalogue.Infrastructure.Repositories
{
    public interface IAuthorRepository<TAuthor> : IRepository<TAuthor> where TAuthor : class
    {
        IEnumerable<TAuthor> GetAllAuthors(long offset, long take);
        TAuthor GetAuthor(long id);

        long CreateAuthor(TAuthor author);
        void EditAuthor(TAuthor author);
        void DeleteAuthor(long id);
    }
}
