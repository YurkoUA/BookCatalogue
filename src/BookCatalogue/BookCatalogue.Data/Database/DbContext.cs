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
    }
}
