using System;
using System.Collections.Generic;

namespace BookCatalogue.Infrastructure.Repositories
{
    public interface IRepository<TEntity> where TEntity : class
    {
        IEnumerable<TEntity> GetAll();
        TEntity Get(long id);

        long Insert(TEntity entity);
        void Update(TEntity entity);
        void Delete(long id);

        IEnumerable<TEntity> ExecuteQuery(string query, object paramModel = null);
        TEntity ExecuteQuerySingle(string query, object paramModel = null);
        TReturn ExecuteQuerySingle<TReturn>(string query, object paramModel = null);

        void ExecuteSP(string name, object paramModel = null);

        TEntity ExecuteSPSingle(string name, object paramModel = null);

        IEnumerable<TEntity> ExecuteSimpleSP(string name, object paramModel = null);

        IEnumerable<TReturn> ExecuteSP<TFirst, TSecond, TReturn>(string name, Func<TFirst, TSecond, TReturn> map, string splitOn, object paramModel = null);
        IEnumerable<TReturn> ExecuteSP<TFirst, TSecond, TThird, TReturn>(string name, Func<TFirst, TSecond, TThird, TReturn> map, string splitOn, object paramModel = null);
    }
}
