using NUnit.Framework;
using MovieAPI.Services;
namespace MovieAPITest
{
  public class Tests
  {
    private MovieService _movieService;

    [SetUp]
    public void Setup()
    {
      _movieService = new MovieService();
    }

    [Test]
    public void GetMovieList_HasCountGreaterThanZero()
    {
      var result = this._movieService.GetMoviesList();
      Assert.GreaterOrEqual(result.Count, 1);
    }

    [Test]
    public void GetMovieList_IsNotNull()
    {
      var result = this._movieService.GetMoviesList();
      Assert.IsNotNull(result);
    }

    [Test]
    public void GetMovieList_HasTitleDefined()
    {
      var result = this._movieService.GetMoviesList();
      Assert.IsNotNull(result[0].Title);
    }

  }
}
