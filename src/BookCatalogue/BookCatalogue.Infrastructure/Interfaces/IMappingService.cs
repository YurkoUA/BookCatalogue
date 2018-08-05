using System.Collections.Generic;

namespace BookCatalogue.Infrastructure.Interfaces
{
    public interface IMappingService
    {
        TDestination ConvertTo<TDestination>(object source);
        IEnumerable<TDestination> ConvertCollectionTo<TDestination>(object source);
    }
}
