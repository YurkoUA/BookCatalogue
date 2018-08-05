using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace BookCatalogue.Extensions
{
    public static class ValidationExtensions
    {
        public static IEnumerable<string> ToEnumerableString(this ModelStateDictionary modelState)
        {
            return modelState.Values.Where(e => e.Errors.Count > 0)
                    .SelectMany(e => e.Errors)
                    .Select(e => e.ErrorMessage);
        }
    }
}
