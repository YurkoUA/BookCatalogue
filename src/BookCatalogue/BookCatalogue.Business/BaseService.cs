using BookCatalogue.Infrastructure.Interfaces;

namespace BookCatalogue.Business
{
    public abstract class BaseService
    {
        protected readonly IMappingService mapper;

        protected BaseService(IMappingService mapper)
        {
            this.mapper = mapper;
        }
    }
}
