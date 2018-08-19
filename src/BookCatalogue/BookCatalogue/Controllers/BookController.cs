using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BookCatalogue.Filters;
using BookCatalogue.Infrastructure.Services;
using BookCatalogue.ViewModels.Request;
using BookCatalogue.ViewModels.Book;
using BookCatalogue.ViewModels.Response;

namespace BookCatalogue.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [ValidateModelFilter]
    public class BookController : BaseController
    {
        private readonly IBookService bookService;

        public BookController(IBookService bookService)
        {
            this.bookService = bookService;
        }

        [HttpGet]
        public IActionResult GetAll([FromQuery]PagingVM paging)
        {
            return Ok(bookService.GetAllBooks(paging.Offset, paging.Take));
        }

        [HttpGet("{id}")]
        public IActionResult GetBook(int id)
        {
            return Ok(bookService.GetBook(id));
        }

        [HttpGet("ByAuthor/{authorId}")]
        public IActionResult GetByAuthor(long authorId, [FromQuery]PagingVM paging)
        {
            return Ok(bookService.GetByAuthor(authorId, paging.Offset, paging.Take));
        }

        [HttpGet("Find")]
        public IActionResult Find([FromQuery]SearchVM search)
        {
            return Ok(bookService.FindBook(search.Expression, search.Offset, search.Take));
        }

        [HttpPost]
        public IActionResult Create([FromBody]BookCreateVM book)
        {
            var id = bookService.CreateBook(book);
            return Ok(new Identifier(id));
        }

        [HttpPut("{id?}")]
        public IActionResult Edit(long id, [FromBody]BookCreateVM book)
        {
            book.Id = id;
            bookService.EditBook(book);
            return Ok();
        }

        [HttpDelete("{id?}")]
        public IActionResult Delete(long id)
        {
            bookService.DeleteBook(id);
            return Ok();
        }
    }
}