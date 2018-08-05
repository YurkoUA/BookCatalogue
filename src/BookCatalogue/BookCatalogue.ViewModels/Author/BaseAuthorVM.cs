using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace BookCatalogue.ViewModels.Author
{
    public class BaseAuthorVM
    {
        [BindNever]
        public long Id { get; set; }

        [Required, StringLength(64, MinimumLength = 3)]
        public string Name { get; set; }

        [BindNever]
        public long BooksCount { get; set; }
    }
}
