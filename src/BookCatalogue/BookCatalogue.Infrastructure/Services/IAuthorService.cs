using System;
using System.Collections.Generic;
using System.Text;
using BookCatalogue.Data.Entity;

namespace BookCatalogue.Infrastructure.Services
{
    public interface IAuthorService
    {
        IEnumerable<AuthorEM> GetAllAuthors(long offset, long take);
    }
}
