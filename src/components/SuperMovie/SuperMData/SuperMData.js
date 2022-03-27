import React, { useEffect, useState } from "react";
import "./SuperMData.css";
function SuperMData() {
  let [getData, setgetData] = useState(null);
  let [inputData, setInputdata] = useState("");
  const api =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cb22a275df2167ad963089e321e0d42e&page=1";
  const searchApi =
    'https://api.themoviedb.org/3/search/movie?api_key=cb22a275df2167ad963089e321e0d42e&query="';
  const imageapi = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((Data) => setgetData(Data.results));
  }, []);
  console.log(getData);

  function getdata(arg) {
    fetch(arg)
      .then((res) => {
        return res.json();
      })
      .then((Data) => setgetData(Data.results));
  }

  let submitmovie = (e) => {
    e.preventDefault();
    if (inputData && inputData !== "") {
      getdata(searchApi + inputData);
      setInputdata(" ");
    } else {
      window.location.reload();
    }
  };
  return (
    <div className="maindata">
      <header>
        <form action="" className="form" onSubmit={submitmovie}>
          <input
            type="text"
            id="search"
            className="search"
            placeholder="search"
            onChange={(e) => setInputdata(e.target.value)}
          />
        </form>
      </header>
      <main id="main">
        {getData?.map((movie) => {
          return (
            <div className="movie">
              <img src={imageapi + movie.poster_path} alt={movie.title} />
              <div className="movie-info">
                <p className="h3Title">{movie.title}</p>
                <span>{movie.vote_average}</span>
              </div>
              <div className="overview">
                <h3>Overview</h3>
                {movie.overview}
              </div>
            </div>
          );
        })}
      </main>
      <footer>
        <div class="start">
          <div class="content">© 2021</div>
          <div class="content">YourMovie Media Pvt. Ltd.</div>
        </div>

        <div class="end">
          <div>
            Built with <span class="heart">♥</span> in India
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SuperMData;
