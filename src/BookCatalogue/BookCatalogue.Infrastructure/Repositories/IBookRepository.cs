using System.Collections.Generic;
using BookCatalogue.Data.Entity;

namespace BookCatalogue.Infrastructure.Repositories
{
    public interface IBookRepository : IRepository<BookEM>
    {
        IEnumerable<BookEM> GetAllBooks(long offset, long take);
        IEnumerable<BookEM> GetByAuthor(long authorId, long offset, long take);
        BookEM GetBook(long id);
        IEnumerable<BookEM> FindBook(string name, long offset, long take);

        long CreateBook(BookEM book);
        void EditBook(BookEM book);
        void DeleteBook(long id);
    }
}
