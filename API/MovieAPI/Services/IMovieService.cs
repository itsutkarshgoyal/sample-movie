using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MovieAPI.Services
{
  public interface IMovieService
  {
    public IList<Movie> GetMoviesList();
  }
}
