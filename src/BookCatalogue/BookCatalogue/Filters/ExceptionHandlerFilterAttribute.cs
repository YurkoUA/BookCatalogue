using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Primitives;
using Newtonsoft.Json;

namespace BookCatalogue.Filters
{
    public class ExceptionHandlerFilterAttribute : Attribute, IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            if (!context.ExceptionHandled)
            {
                context.ExceptionHandled = true;

                context.HttpContext.Response.StatusCode = 500;
                context.HttpContext.Response.Headers.Add("Content-Type", new StringValues("application/json"));
                context.HttpContext.Response.WriteAsync(JsonConvert.SerializeObject(new { context.Exception.Message }));
            }
        }
    }
}
