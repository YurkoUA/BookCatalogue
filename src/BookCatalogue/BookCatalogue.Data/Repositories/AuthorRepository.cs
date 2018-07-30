using BookCatalogue.Data.Entities;
using BookCatalogue.Infrastructure.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace BookCatalogue.Data.Repositories
{
    public class AuthorRepository : DapperRepository<AuthorEM>, IAuthorRepository<AuthorEM>
    {
        protected AuthorRepository(string connectionString) : base(connectionString)
        {
        }

        public IEnumerable<AuthorEM> GetAllAuthors(long offset, long take)
        {
            throw new NotImplementedException();
        }

        public AuthorEM GetAuthor(long id)
        {
            throw new NotImplementedException();
        }

        public long CreateAuthor(AuthorEM author)
        {
            throw new NotImplementedException();
        }

        public void EditAuthor(AuthorEM author)
        {
            throw new NotImplementedException();
        }

        public void DeleteAuthor(long id)
        {
            throw new NotImplementedException();
        }
    }
}
