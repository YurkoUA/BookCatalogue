using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookCatalogue.Infrastructure.Services;
using BookCatalogue.ViewModels.Request;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookCatalogue.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
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

        [HttpGet("{id?}")]
        public IActionResult GetBook(int id)
        {
            return Ok(bookService.GetBook(id));
        }
    }
}