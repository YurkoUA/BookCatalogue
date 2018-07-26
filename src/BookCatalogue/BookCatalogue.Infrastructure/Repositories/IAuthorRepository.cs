using System;
using System.Collections.Generic;
using System.Text;

namespace BookCatalogue.Infrastructure.Repositories
{
    public interface IAuthorRepository<TAuthor, TKey> : IRepository<TAuthor, TKey> where TAuthor : class
    {
    }
}
