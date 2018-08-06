using System.Collections.Generic;
using BookCatalogue.Data.Entity;

namespace BookCatalogue.Infrastructure.Repositories
{
    public interface IAuthorRepository : IRepository<AuthorEM>
    {
        IEnumerable<AuthorEM> GetAllAuthors(long offset, long take);
        AuthorEM GetAuthor(long id);
        IEnumerable<AuthorEM> FindAuthor(string name, long offset, long take);

        long CreateAuthor(AuthorEM author);
        void EditAuthor(AuthorEM author);
        void DeleteAuthor(long id);

        bool CanBeDeleted(long id);
    }
}
