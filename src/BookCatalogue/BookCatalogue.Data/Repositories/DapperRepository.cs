using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using Dapper;
using Dapper.Contrib.Extensions;
using BookCatalogue.Infrastructure.Repositories;

namespace BookCatalogue.Data.Repositories
{
    public abstract class DapperRepository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        private readonly string connectionString;

        protected DapperRepository(string connectionString)
        {
            this.connectionString = connectionString;
        }

        public IEnumerable<TEntity> GetAll()
        {
            return PerformOperation(db => db.GetAll<TEntity>());
        }

        public TEntity Get(long id)
        {
            return PerformOperation(db => db.Get<TEntity>(id));
        }

        public long Insert(TEntity entity)
        {
            return PerformOperation(db => db.Insert(entity));
        }

        public void Update(TEntity entity)
        {
            PerformOperation(db => db.Update(entity));
        }
        public void Delete(long id)
        {
            PerformOperation(db =>
            {
                var entity = db.Get<TEntity>(id);
                db.Delete(entity);
            });
        }

        public void ExecuteQuery(string query, object paramModel)
        {
            PerformOperation(db => db.Query(query, paramModel));
        }

        public TEntity ExecuteQuerySingle(string query, object paramModel)
        {
            return PerformOperation(db => db.QueryFirstOrDefault<TEntity>(query, paramModel));
        }

        public void ExecuteSP(string name, object paramModel)
        {
            PerformOperation(db => db.Query(name, paramModel, commandType: CommandType.StoredProcedure));
        }

        public TEntity ExecuteSPSingle(string name, object paramModel)
        {
            return PerformOperation(db => db.QueryFirstOrDefault<TEntity>(name, paramModel, commandType: CommandType.StoredProcedure));
        }

        public IEnumerable<TEntity> ExecuteSimpleSP(string name, object paramModel)
        {
            return PerformOperation(db => db.Query<TEntity>(name, paramModel, commandType: CommandType.StoredProcedure));
        }

        public IEnumerable<TReturn> ExecuteSP<TFirst, TSecond, TReturn>(string name, Func<TFirst, TSecond, TReturn> map, string splitOn, object paramModel)
        {
            return PerformOperation(db => db.Query(name, map, splitOn: splitOn, param: paramModel, commandType: CommandType.StoredProcedure));
        }

        public IEnumerable<TReturn> ExecuteSP<TFirst, TSecond, TThird, TReturn>(string name, Func<TFirst, TSecond, TThird, TReturn> map, string splitOn, object paramModel)
        {
            return PerformOperation(db => db.Query(name, map, splitOn: splitOn, param: paramModel, commandType: CommandType.StoredProcedure));
        }

        #region Private methods.

        private void PerformOperation(Action<IDbConnection> action)
        {
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                action(db);
            }
        }

        private TResult PerformOperation<TResult>(Func<IDbConnection, TResult> func)
        {
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                return func(db);
            }
        }

        #endregion
    }
}
