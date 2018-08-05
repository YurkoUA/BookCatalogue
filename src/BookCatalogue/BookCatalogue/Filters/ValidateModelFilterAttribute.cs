using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc.Filters;
using BookCatalogue.Extensions;
using BookCatalogue.Controllers;

namespace BookCatalogue.Filters
{
    public class ValidateModelFilterAttribute : Attribute, IActionFilter
    {
        public void OnActionExecuted(ActionExecutedContext context)
        {
            // No action.
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            if (context.ModelState?.IsValid == false)
            {
                context.Result = (context.Controller as BaseController).BadRequestWithErrors(context.ModelState.ToEnumerableString().ToArray());
            }
        }
    }
}
