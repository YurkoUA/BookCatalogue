using System.Linq;
using AutoMapper;
using BookCatalogue.Data.Entity;
using BookCatalogue.ViewModels.Author;
using BookCatalogue.ViewModels.Book;

namespace BookCatalogue.Bootstrap.AutoMapper
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            ConfigureAuthorModels();
            ConfigureBookModels();
        }

        private void ConfigureAuthorModels()
        {
            CreateMap<AuthorEM, BaseAuthorVM>();

            CreateMap<BaseAuthorVM, AuthorEM>()
                .ForMember(dest => dest.BooksCount, opt => opt.Ignore());
        }

        private void ConfigureBookModels()
        {
            CreateMap<BookEM, BaseBookVM>();
            CreateMap<BookEM, BookDetailsVM>();

            CreateMap<BookCreateVM, BookEM>()
                .ForMember(dest => dest.Authors, opt => opt.MapFrom(src => src.AuthorsIds.Select(id => new AuthorEM { Id = id })));
        }
    }
}
