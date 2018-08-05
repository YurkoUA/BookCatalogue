using System.Collections.Generic;
using Dapper;
using BookCatalogue.Infrastructure.Repositories;
using BookCatalogue.Data.Entity;

namespace BookCatalogue.Data.Repositories
{
    public class AuthorRepository : DapperRepository<AuthorEM>, IAuthorRepository
    {
        protected AuthorRepository(string connectionString) : base(connectionString)
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

            return ExecuteSPSingle("USP_Author_Get", parameters);
        }

        public IEnumerable<AuthorEM> FindAuthor(string name)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@Name", name);

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
    }
}
