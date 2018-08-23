using System.Collections.Generic;
using Dapper;
using BookCatalogue.Infrastructure.Repositories;
using BookCatalogue.Data.Entity;
using BookCatalogue.Infrastructure.Interfaces;
using System.Linq;

namespace BookCatalogue.Data.Repositories
{
    public class AuthorRepository : DapperRepository<AuthorEM>, IAuthorRepository
    {
        public AuthorRepository(IDbContext dbContext) : base(dbContext)
        {
        }

        public IEnumerable<AuthorEM> GetAllAuthors(long offset, long take)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@offset", offset);
            parameters.Add("@take", take);

            return ExecuteSimpleSP("USP_Author_GetList", parameters);
        }

        public AuthorEM GetAuthor(long id)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@id", id);
            
            var authorsDictionary = new Dictionary<long, AuthorEM>();

            return ExecuteSP<AuthorEM, BookEM, AuthorEM>("USP_Author_Get",
                (author, book) =>
                {
                    if (!authorsDictionary.TryGetValue(author.Id, out AuthorEM authorEntry))
                    {
                        authorEntry = author;
                        authorEntry.Books = new List<BookEM>();
                        authorsDictionary.Add(author.Id, authorEntry);
                    }

                    authorEntry.Books.Add(book);
                    return authorEntry;
                }, "Id", parameters).Distinct().FirstOrDefault();
        }

        public IEnumerable<AuthorEM> FindAuthor(string name, long offset, long take)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@name", name);
            parameters.Add("@offset", offset);
            parameters.Add("@take", take);

            return ExecuteSimpleSP("USP_Author_Find", parameters);
        }

        public long CreateAuthor(AuthorEM author)
        {
            return Insert(author);
        }

        public void EditAuthor(AuthorEM author)
        {
            Update(author);
        }

        public void DeleteAuthor(long id)
        {
            Delete(id);
        }

        public bool CanBeDeleted(long id)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@authorId", id);

            var sql = @"SELECT [dbo].[fn_Author_CanBeDeleted](@authorId)";

            return ExecuteQuerySingle<bool>(sql, parameters);
        }
    }
}
