using System;
using System.Data;

namespace BookCatalogue.Infrastructure.Interfaces
{
    public interface IDbContext
    {
        string ConnectionString { get; }

        void PerformOperation(Action<IDbConnection> action);
        TResult PerformOperation<TResult>(Func<IDbConnection, TResult> func);
    }
}
