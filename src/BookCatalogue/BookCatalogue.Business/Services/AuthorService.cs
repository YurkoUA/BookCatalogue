using System;
using System.Collections.Generic;
using System.Text;
using BookCatalogue.Data.Entity;
using BookCatalogue.Infrastructure.Interfaces;
using BookCatalogue.Infrastructure.Repositories;
using BookCatalogue.Infrastructure.Services;
using BookCatalogue.ViewModels.Author;

namespace BookCatalogue.Business.Services
{
    public class AuthorService : BaseService, IAuthorService
    {
        private readonly IAuthorRepository authorRepository;

        public AuthorService(IMappingService mappingService, IAuthorRepository authorRepository) : base(mappingService)
        {
            this.authorRepository = authorRepository;
        }

        public IEnumerable<BaseAuthorVM> GetAllAuthors(long offset, long take)
        {
            var authorsEM = authorRepository.GetAllAuthors(offset, take);
            return mapper.ConvertCollectionTo<BaseAuthorVM>(authorsEM);
        }

        public IEnumerable<BaseAuthorVM> FindAuthor(string name, long offset, long take)
        {
            var authorsEM = authorRepository.FindAuthor(name, offset, take);
            return mapper.ConvertCollectionTo<BaseAuthorVM>(authorsEM);
        }

        public BaseAuthorVM GetAuthor(long id)
        {
            var authorEM = authorRepository.GetAuthor(id);
            return mapper.ConvertTo<BaseAuthorVM>(authorEM);
        }

        public long CreateAuthor(BaseAuthorVM author)
        {
            var authorEM = mapper.ConvertTo<AuthorEM>(author);
            return authorRepository.CreateAuthor(authorEM);
        }

        public void EditAuthor(BaseAuthorVM author)
        {
            var authorEM = mapper.ConvertTo<AuthorEM>(author);
            authorRepository.EditAuthor(authorEM);
        }

        public void DeleteAuthor(long id)
        {
            authorRepository.Delete(id);
        }

        public bool CanBeDeleted(long id)
        {
            return authorRepository.CanBeDeleted(id);
        }
    }
}
