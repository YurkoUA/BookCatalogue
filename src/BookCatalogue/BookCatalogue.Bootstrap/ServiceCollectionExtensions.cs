using Microsoft.Extensions.DependencyInjection;
using AutoMapper;
using BookCatalogue.Infrastructure.Interfaces;
using BookCatalogue.Data.Database;
using BookCatalogue.Infrastructure.Services;
using BookCatalogue.Business.Services;
using BookCatalogue.Infrastructure.Repositories;
using BookCatalogue.Data.Repositories;
using BookCatalogue.Infrastructure;

namespace BookCatalogue.Bootstrap
{
    public static class ServiceCollectionExtensions
    {
        public static void ConfigureAutoMapper(this IServiceCollection services)
        {
            services.AddAutoMapper();
        }

        public static void ConfigureDatabase(this IServiceCollection services, string connectionString)
        {
            services.AddSingleton<IDbContext>((provider) =>
            {
                return new DbContext(connectionString);
            });
        }

        public static void ConfigureRepositories(this IServiceCollection services)
        {
            services.AddSingleton<IAuthorRepository, AuthorRepository>();
            services.AddSingleton<IBookRepository, BookRepository>();
        }

        public static void ConfigureServices(this IServiceCollection services)
        {
            services.AddSingleton<IAuthorService, AuthorService>();
            services.AddSingleton<IBookService, BookService>();

            services.AddSingleton<IMappingService, MappingService>();
        }
    }
}
