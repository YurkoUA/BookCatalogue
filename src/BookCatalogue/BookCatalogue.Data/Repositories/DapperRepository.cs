using BookCatalogue.Infrastructure.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace BookCatalogue.Data.Repositories
{
    public abstract class DapperRepository<TEntity, TKey> : IRepository<TEntity, TKey> where TEntity : class
    {
        public IEnumerable<TEntity> GetAll()
        {
            throw new NotImplementedException();
        }

        public TEntity Get(TKey id)
        {
            throw new NotImplementedException();
        }

        public TKey Insert(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public void Update(TEntity entity)
        {
            throw new NotImplementedException();
        }
        public void Delete(TKey id)
        {
            throw new NotImplementedException();
        }

        public void ExecuteQuery(string query, object paramModel)
        {
            throw new NotImplementedException();
        }

        public TEntity ExecuteQuerySingle(string query, object paramModel)
        {
            throw new NotImplementedException();
        }

        public void ExecuteSP(string name, object paramModel)
        {
            throw new NotImplementedException();
        }

        public TEntity ExecuteSPSingle(string name, object paramModel)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<TEntity> ExecuteSimpleSP(string name, object paramModel)
        {
            throw new NotImplementedException();
        }
    }
}
