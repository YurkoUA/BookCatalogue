using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace BookCatalogue.ViewModels.Book
{
    public class BaseBookVM
    {
        [BindNever]
        public long Id { get; set; }

        [Required, StringLength(64, MinimumLength = 3)]
        public string Title { get; set; }

        [Range(0, long.MaxValue)]
        public int Pages { get; set; }

        public DateTime PublishedDate { get; set; }
    }
}
