using System;
using System.Collections.Generic;
using System.Text;
using BookCatalogue.Data.Entity;
using BookCatalogue.Infrastructure.Interfaces;
using BookCatalogue.Infrastructure.Repositories;
using BookCatalogue.Infrastructure.Services;
using BookCatalogue.ViewModels.Book;

namespace BookCatalogue.Business.Services
{
    public class BookService : BaseService, IBookService
    {
        private readonly IBookRepository bookRepository;

        public BookService(IMappingService mapper, IBookRepository bookRepository) : base(mapper)
        {
            this.bookRepository = bookRepository;
        }

        public IEnumerable<BookDetailsVM> GetAllBooks(long offset, long take)
        {
            var booksEM = bookRepository.GetAllBooks(offset, take);
            return mapper.ConvertCollectionTo<BookDetailsVM>(booksEM);
        }

        public IEnumerable<BookDetailsVM> GetByAuthor(long authorId, long offset, long take)
        {
            var booksEM = bookRepository.GetByAuthor(authorId, offset, take);
            return mapper.ConvertCollectionTo<BookDetailsVM>(booksEM);
        }

        public IEnumerable<BookDetailsVM> FindBook(string name, long offset, long take)
        {
            var booksEM = bookRepository.FindBook(name, offset, take);
            return mapper.ConvertCollectionTo<BookDetailsVM>(booksEM);
        }

        public BookDetailsVM GetBook(long id)
        {
            var bookEM = bookRepository.GetBook(id);
            return mapper.ConvertTo<BookDetailsVM>(bookEM);
        }

        public long CreateBook(BookCreateVM book)
        {
            var bookEM = mapper.ConvertTo<BookEM>(book);
            return bookRepository.CreateBook(bookEM);
        }

        public void EditBook(BookCreateVM book)
        {
            var bookEM = mapper.ConvertTo<BookEM>(book);
            bookRepository.EditBook(bookEM);
        }

        public void DeleteBook(long id)
        {
            bookRepository.DeleteBook(id);
        }
    }
}
