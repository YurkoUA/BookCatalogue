using System.Collections.Generic;
using BookCatalogue.ViewModels.Author;

namespace BookCatalogue.Infrastructure.Services
{
    public interface IAuthorService
    {
        IEnumerable<BaseAuthorVM> GetAllAuthors(long offset, long take);
        IEnumerable<BaseAuthorVM> FindAuthor(string name, long offset, long take);
        IEnumerable<BaseAuthorVM> GetForSelectList();
        AuthorDetailsVM GetAuthor(long id);

        long CreateAuthor(BaseAuthorVM author);
        void EditAuthor(BaseAuthorVM author);
        void DeleteAuthor(long id);

        bool CanBeDeleted(long id);
    }
}
