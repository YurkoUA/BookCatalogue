using System.Collections.Generic;

namespace BookCatalogue.Infrastructure.Repositories
{
    public interface IBookRepository<TBook> : IRepository<TBook> where TBook : class
    {
        IEnumerable<TBook> GetAllBooks(long offset, long take);
        TBook GetBook(long id);

        long CreateBook(TBook author);
        void EditBook(TBook author);
        void DeleteBook(long id);
    }
}
