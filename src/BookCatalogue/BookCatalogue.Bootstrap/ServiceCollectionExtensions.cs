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
            services.AddScoped<IDbContext>((provider) =>
            {
                return new DbContext(connectionString);
            });
        }

        public static void ConfigureRepositories(this IServiceCollection services)
        {
            services.AddScoped<IAuthorRepository, AuthorRepository>();
            services.AddScoped<IBookRepository, BookRepository>();
        }

        public static void ConfigureServices(this IServiceCollection services)
        {
            services.AddScoped<IAuthorService, AuthorService>();
            services.AddScoped<IBookService, BookService>();

            services.AddScoped<IMappingService, MappingService>();
        }
    }
}
