using System;
using System.Data;
using System.Data.SqlClient;
using BookCatalogue.Infrastructure.Interfaces;

namespace BookCatalogue.Data.Database
{
    public class DbContext : IDbContext
    {
        public DbContext(string connectionString)
        {
            ConnectionString = connectionString;
        }

        public string ConnectionString { get; private set; }

        public void PerformOperation(Action<IDbConnection> action)
        {
            using (IDbConnection db = new SqlConnection(ConnectionString))
            {
                action(db);
            }
        }

        public TResult PerformOperation<TResult>(Func<IDbConnection, TResult> func)
        {
            using (IDbConnection db = new SqlConnection(ConnectionString))
            {
                return func(db);
            }
        }
    }
}
