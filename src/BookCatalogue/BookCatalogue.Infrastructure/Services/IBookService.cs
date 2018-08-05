using System.Collections.Generic;
using BookCatalogue.ViewModels.Book;

namespace BookCatalogue.Infrastructure.Services
{
    public interface IBookService
    {
        IEnumerable<BookDetailsVM> GetAllBooks(long offset, long take);
        IEnumerable<BookDetailsVM> GetByAuthor(long authorId, long offset, long take);
        IEnumerable<BookDetailsVM> FindBook(string name);
        BookDetailsVM GetBook(long id);

        long CreateBook(BookCreateVM book);
        void EditBook(BookCreateVM book);
        void DeleteBook(long id);
    }
}
