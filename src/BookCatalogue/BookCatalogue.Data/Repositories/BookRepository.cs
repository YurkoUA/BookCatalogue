using BookCatalogue.Data.Entities;
using BookCatalogue.Infrastructure.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace BookCatalogue.Data.Repositories
{
    public class BookRepository : DapperRepository<BookEM>, IBookRepository<BookEM>
    {
        protected BookRepository(string connectionString) : base(connectionString)
        {
        }

        public IEnumerable<BookEM> GetAllBooks(long offset, long take)
        {
            throw new NotImplementedException();
        }

        public BookEM GetBook(long id)
        {
            throw new NotImplementedException();
        }

        public long CreateBook(BookEM author)
        {
            throw new NotImplementedException();
        }

        public void EditBook(BookEM author)
        {
            throw new NotImplementedException();
        }

        public void DeleteBook(long id)
        {
            throw new NotImplementedException();
        }
    }
}
