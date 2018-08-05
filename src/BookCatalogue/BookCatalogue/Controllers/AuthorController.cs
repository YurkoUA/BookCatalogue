using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BookCatalogue.Infrastructure.Services;
using BookCatalogue.ViewModels.Request;
using BookCatalogue.Filters;
using BookCatalogue.ViewModels.Author;
using BookCatalogue.ViewModels.Response;

namespace BookCatalogue.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [ValidateModelFilter]
    public class AuthorController : BaseController
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
        public IActionResult GetAuthor(long id)
        {
            return Ok(authorService.GetAuthor(id));
        }

        [HttpGet("Find")]
        public IActionResult Find([FromQuery]SearchVM search)
        {
            return Ok(authorService.FindAuthor(search.Expression));
        }

        [HttpPost]
        public IActionResult Create([FromBody]BaseAuthorVM author)
        {
            var id = authorService.CreateAuthor(author);
            return Ok(new Identifier(id));
        }

        [HttpPut("{id?}")]
        public IActionResult Edit(long id, [FromBody]BaseAuthorVM author)
        {
            author.Id = id;
            authorService.EditAuthor(author);
            return Ok();
        }

        [HttpDelete("{id?}")]
        public IActionResult Delete(long id)
        {
            if (!authorService.CanBeDeleted(id))
            {
                return BadRequestWithErrors("The author can't be deleted, because it has some books.");
            }

            authorService.DeleteAuthor(id);
            return Ok();
        }
    }
}