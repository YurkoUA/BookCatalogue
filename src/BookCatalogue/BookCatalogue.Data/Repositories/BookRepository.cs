using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using Dapper;
using BookCatalogue.Data.Entity;
using BookCatalogue.Infrastructure.Repositories;
using BookCatalogue.Infrastructure.Extensions;
using BookCatalogue.Infrastructure.Interfaces;

namespace BookCatalogue.Data.Repositories
{
    public class BookRepository : DapperRepository<BookEM>, IBookRepository
    {
        public BookRepository(IDbContext dbContext) : base(dbContext)
        {
        }

        public IEnumerable<BookEM> GetAllBooks(long offset, long take)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@offset", offset);
            parameters.Add("@take", take);

            return _Get("USP_Book_GetList", parameters);
        }

        public IEnumerable<BookEM> GetByAuthor(long authorId, long offset, long take)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@authorId", authorId);
            parameters.Add("@offset", offset);
            parameters.Add("@take", take);

            return _Get("USP_Book_ByAuthor", parameters);
        }

        public BookEM GetBook(long id)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@Id", id);

            return _Get("USP_Book_Get", parameters).FirstOrDefault();
        }

        public IEnumerable<BookEM> FindBook(string name, long offset, long take)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@title", name);
            parameters.Add("@offset", offset);
            parameters.Add("@take", take);

            return _Get("USP_Book_Find", parameters);
        }

        public long CreateBook(BookEM book)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@Title", book.Title);
            parameters.Add("@Pages", book.Pages);
            parameters.Add("@PublishedDate", book.PublishedDate);

            // TODO: Name of the type make as a const.
            parameters.Add("@AuthorsIds", book.Authors.Select(a => a.Id).AsDataTableParam().AsTableValuedParameter("BigIntArrayType"));

            // TODO: Problems with casting Int32 to Int64.
            parameters.Add("@Id", dbType: DbType.Int32, direction: ParameterDirection.ReturnValue);

            ExecuteSP("USP_Book_Insert", parameters);
            return parameters.Get<int>("@Id");
        }

        public void EditBook(BookEM book)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@Id", book.Id);
            parameters.Add("@Title", book.Title);
            parameters.Add("@Pages", book.Pages);
            parameters.Add("@PublishedDate", book.PublishedDate);

            // TODO: Name of the type make as a const.
            parameters.Add("@AuthorsIds", book.Authors.Select(a => a.Id).AsDataTableParam().AsTableValuedParameter("BigIntArrayType"));

            ExecuteSP("USP_Book_Update", parameters);
        }

        public void DeleteBook(long id)
        {
            Delete(id);
        }

        #region Private methods.

        private IEnumerable<BookEM> _Get(string spName, DynamicParameters parameters)
        {
            var booksDictionary = new Dictionary<long, BookEM>();

            return ExecuteSP<BookEM, AuthorEM, BookEM>(
                spName,
                (book, author) =>
                {
                    if (!booksDictionary.TryGetValue(book.Id, out BookEM bookEntry))
                    {
                        bookEntry = book;
                        bookEntry.Authors = new List<AuthorEM>();
                        booksDictionary.Add(book.Id, bookEntry);
                    }

                    bookEntry.Authors.AsList().Add(author);
                    return bookEntry;
                },
                "Id", parameters).Distinct();
        }

        #endregion
    }
}
