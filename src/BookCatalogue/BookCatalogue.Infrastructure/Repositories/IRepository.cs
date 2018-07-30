using System;
using System.Collections.Generic;
using System.Text;

namespace BookCatalogue.Infrastructure.Repositories
{
    public interface IRepository<TEntity> where TEntity : class
    {
        IEnumerable<TEntity> GetAll();
        TEntity Get(long id);

        long Insert(TEntity entity);
        void Update(TEntity entity);
        void Delete(long id);

        void ExecuteQuery(string query, object paramModel);
        TEntity ExecuteQuerySingle(string query, object paramModel);

        void ExecuteSP(string name, object paramModel);
        TEntity ExecuteSPSingle(string name, object paramModel);

        IEnumerable<TEntity> ExecuteSimpleSP(string name, object paramModel);
    }
}
