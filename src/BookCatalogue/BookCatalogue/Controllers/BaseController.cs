using Microsoft.AspNetCore.Mvc;

namespace BookCatalogue.Controllers
{
    public class BaseController : ControllerBase
    {
        [NonAction]
        public IActionResult BadRequestWithErrors(params string[] errors)
        {
            return BadRequest(errors);
        }
    }
}
