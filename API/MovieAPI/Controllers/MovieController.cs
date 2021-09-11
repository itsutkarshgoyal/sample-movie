using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
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

        public MovieController(ILogger<MovieController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("movie-list")]
        public IEnumerable<Movie> Get()
        {
          var folderDetails = Path.Combine(Directory.GetCurrentDirectory(), "movies.json");
          var JSON = System.IO.File.ReadAllText(folderDetails);
          var moviesList = JsonConvert.DeserializeObject<Movie[]>(JSON);
          return moviesList;
        }

  }
}
