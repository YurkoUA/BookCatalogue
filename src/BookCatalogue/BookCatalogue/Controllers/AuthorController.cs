using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BookCatalogue.Infrastructure.Services;
using BookCatalogue.ViewModels.Request;

namespace BookCatalogue.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorController : ControllerBase
    {
        private readonly IAuthorService authorService;

        public AuthorController(IAuthorService authorService)
        {
            this.authorService = authorService;
        }

        [HttpGet]
        public IActionResult GetAll([FromQuery]PagingVM paging)
        {
            return Ok(authorService.GetAllAuthors(paging.Offset, paging.Take));
        }

        [HttpGet("{id?}")]
        public IActionResult GetAuthor(int id)
        {
            return Ok(authorService.GetAuthor(id));
        }
    }
}