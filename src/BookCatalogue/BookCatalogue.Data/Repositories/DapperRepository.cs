using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using Dapper;
using Dapper.Contrib.Extensions;
using BookCatalogue.Infrastructure.Repositories;
using BookCatalogue.Infrastructure.Interfaces;

namespace BookCatalogue.Data.Repositories
{
    public abstract class DapperRepository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        private readonly IDbContext dbContext;

        protected DapperRepository(IDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public IEnumerable<TEntity> GetAll()
        {
            return dbContext.PerformOperation(db => db.GetAll<TEntity>());
        }

        public TEntity Get(long id)
        {
            return dbContext.PerformOperation(db => db.Get<TEntity>(id));
        }

        public long Insert(TEntity entity)
        {
            return dbContext.PerformOperation(db => db.Insert(entity));
        }

        public void Update(TEntity entity)
        {
            dbContext.PerformOperation(db => db.Update(entity));
        }
        public void Delete(long id)
        {
            dbContext.PerformOperation(db =>
            {
                var entity = db.Get<TEntity>(id);
                db.Delete(entity);
            });
        }

        public void ExecuteQuery(string query, object paramModel)
        {
            dbContext.PerformOperation(db => db.Query(query, paramModel));
        }

        public TEntity ExecuteQuerySingle(string query, object paramModel)
        {
            return dbContext.PerformOperation(db => db.QueryFirstOrDefault<TEntity>(query, paramModel));
        }

        public TReturn ExecuteQuerySingle<TReturn>(string query, object paramModel)
        {
            return dbContext.PerformOperation(db => db.QueryFirstOrDefault<TReturn>(query, paramModel));
        }

        public void ExecuteSP(string name, object paramModel)
        {
            dbContext.PerformOperation(db => db.Query(name, paramModel, commandType: CommandType.StoredProcedure));
        }

        public TEntity ExecuteSPSingle(string name, object paramModel)
        {
            return dbContext.PerformOperation(db => db.QueryFirstOrDefault<TEntity>(name, paramModel, commandType: CommandType.StoredProcedure));
        }

        public IEnumerable<TEntity> ExecuteSimpleSP(string name, object paramModel)
        {
            return dbContext.PerformOperation(db => db.Query<TEntity>(name, paramModel, commandType: CommandType.StoredProcedure));
        }

        public IEnumerable<TReturn> ExecuteSP<TFirst, TSecond, TReturn>(string name, Func<TFirst, TSecond, TReturn> map, string splitOn, object paramModel)
        {
            return dbContext.PerformOperation(db => db.Query(name, map, splitOn: splitOn, param: paramModel, commandType: CommandType.StoredProcedure));
        }

        public IEnumerable<TReturn> ExecuteSP<TFirst, TSecond, TThird, TReturn>(string name, Func<TFirst, TSecond, TThird, TReturn> map, string splitOn, object paramModel)
        {
            return dbContext.PerformOperation(db => db.Query(name, map, splitOn: splitOn, param: paramModel, commandType: CommandType.StoredProcedure));
        }
    }
}
