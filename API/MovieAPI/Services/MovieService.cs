using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using MovieAPI;

namespace MovieAPI.Services
{
  public class MovieService: IMovieService
  {
    public IList<Movie>GetMoviesList() {
      var folderDetails = Path.Combine(Directory.GetCurrentDirectory(), "movies.json");
      var JSON = System.IO.File.ReadAllText(folderDetails);
      var moviesList = JsonConvert.DeserializeObject<Movie[]>(JSON);
      return moviesList;
    }
  }
}
