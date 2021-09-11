using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MovieAPI.Services;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class MovieController : ControllerBase
  {

    private readonly ILogger<MovieController> _logger;
    private readonly IMovieService _movieService;


    public MovieController(ILogger<MovieController> logger, IMovieService movieService)
    {
      _logger = logger;
      _movieService = movieService;
    }

    [HttpGet]
    [Route("movie-list")]
    public IEnumerable<Movie> Get()
    {
      return this._movieService.GetMoviesList();
    }

  }
}
