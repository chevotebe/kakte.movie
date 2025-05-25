import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';

const moviesData = [
  {
    id: 1,
    title: "Город грехов",
    year: 2005,
    rating: 8.0,
    genre: "Криминал, Неонуар, Триллер",
    poster: "https://m.media-amazon.com/images/M/MV5BODZmYjMwNzEtNzVhNC00ZTRmLTk2M2UtNzE1MTQ2ZDAxNjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    directors: "Фрэнк Миллер, Роберт Родригес, Квентин Тарантино",
    writers: "Фрэнк Миллер (комикс), Роберт Родригес",
    producers: "Элизабет Авеллан, Роберт Родригес",
    cinematographer: "Роберт Родригес",
    composer: "Джон Дебни, Роберт Родригес",
    editor: "Роберт Родригес",
    budget: "$40 млн",
    boxOffice: "$158.8 млн",
    country: "США",
    cast: [
      {
        name: "Микки Рурк",
        role: "Марв",
        photo: "https://overclockers.ru/st/legacy/blog/279720/572619_O.jpg"
      },
      {
        name: "Клайв Оуэн",
        role: "Дуайт",
        photo: "https://thumbs.dfs.ivi.ru/storage33/contents/1/b/0c998af50ec7a858a4c87471ba0b20.jpg"
      },
      {
        name: "Брюс Уиллис",
        role: "Джон Хартиган",
        photo: "https://www.rewizor.ru/files/1804112nnp.jpg"
      },
      {
        name: "Джессика Альба",
        role: "Нэнси Кэллахан",
        photo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Jessica_Marie_Alba%2C_TechCrunch_Disrupt_NY_2016_-_Day_3_%28cropped%29.jpg"
      },
      {
        name: "Бенисио Дель Торо",
        role: "Джеки-Бой",
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/32/Benicio_Del_Toro_-_Guardians_of_the_Galaxy_premiere_-_July_2014_%28cropped%29.jpg"
      },
      {
        name: "Алексис Бледел",
        role: "Бекки",
        photo: "https://www.film.ru/sites/default/files/people/1458756-2322423.jpg"
      }
    ],
    trailer: "https://rutube.ru/play/embed/94ceb9de1fcdbd9fe5e16d44ed0fcbe9"
  },
  {
    id: 2,
    title: "Темный рыцарь",
    year: 2008,
    rating: 9.0,
    genre: "Боевик, Криминал, Драма",
    poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    directors: "Кристофер Нолан",
    writers: "Джонатан Нолан, Кристофер Нолан",
    producers: "Кристофер Нолан, Чарльз Ровен",
    cinematographer: "Уолли Пфистер",
    composer: "Ханс Циммер, Джеймс Ньютон Ховард",
    editor: "Ли Смит",
    budget: "$185 млн",
    boxOffice: "$1.006 млрд",
    country: "США, Великобритания",
    cast: [
      {
        name: "Кристиан Бэйл",
        role: "Брюс Уэйн / Бэтмен",
        photo: "https://opis-cdn.tinkoffjournal.ru/mercury/christian-bale-50-04.a3lndzrhegtq..jpg"
      },
      {
        name: "Хит Леджер",
        role: "Джокер",
        photo: "https://stoneforest.ru/wp-content/uploads/2019/11/heath-ledger.jpg"
      },
      {
        name: "Аарон Экхарт",
        role: "Харви Дент / Двуликий",
        photo: "https://m.media-amazon.com/images/M/MV5BMTU2MzM0MjQyM15BMl5BanBnXkFtZTcwNDYwODAzMg@@._V1_UY317_CR21,0,214,317_AL_.jpg"
      },
      {
        name: "Гэри Олдман",
        role: "Джеймс Гордон",
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Gary_Oldman_%2831710243526%29_%28cropped%29.jpg"
      },
      {
        name: "Майкл Кейн",
        role: "Альфред Пенниуорт",
        photo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Michael_Caine_%2849555646222%29_%28cropped%29.jpg"
      },
      {
        name: "Морган Фриман",
        role: "Люциус Фокс",
        photo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Morgan_Freeman%2C_Deauville_2018.jpg"
      },
      {
        name: "Мэгги Джилленхол",
        role: "Рэйчел Доус",
        photo: "https://upload.wikimedia.org/wikipedia/commons/4/46/Maggie_Gyllenhaal_%2846793303792%29_%28cropped%29.jpg"
      }
    ],
    trailer: "https://rutube.ru/play/embed/74fb252e6f3a0e6eaedb0909dc6eaf29"
  }
];

const ratedMovies = [
  {
    id: 3,
    title: "Джокер",
    year: 2019,
    rating: 8.4,
    userRating: 9,
    genre: "Триллер, Драма",
    poster: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
  }
];

function MovieDetails() {
  const { id } = useParams();
  const movie = moviesData.find(m => m.id === Number(id));

  const handleImageError = (e) => {
    e.target.src = '/placeholder.jpg';
  };

  if (!movie) {
    return (
      <div className="not-found">
        <h2>Фильм не найден</h2>
        <Link to="/">Вернуться на главную</Link>
      </div>
    );
  }

  return (
    <div className="movie-page">
      <h1>{movie.title} ({movie.year})</h1>
      
      <div className="rating-section">
        <div className="kakte-rating">
          <span className="rating-label">Рейтинг Kakte:</span>
          <span className="rating-value">{movie.rating}/10</span>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="poster-section">
          <img 
            src={movie.poster} 
            alt={movie.title} 
            className="movie-poster-large"
            onError={handleImageError}
          />
          <button className="add-to-watchlist">+ Мой список</button>
        </div>

        <div className="info-section">
          <div className="about-movie">
            <h2>О фильме</h2>
            <div className="info-grid">
              <div className="info-row">
                <span>Год выпуска</span>
                <span>{movie.year}</span>
              </div>
              <div className="info-row">
                <span>Страна</span>
                <span>{movie.country}</span>
              </div>
              <div className="info-row">
                <span>Режиссер</span>
                <span>{movie.directors}</span>
              </div>
              <div className="info-row">
                <span>Сценарий</span>
                <span>{movie.writers}</span>
              </div>
              <div className="info-row">
                <span>В ролях</span>
                <span>
                  {movie.cast.slice(0, 4).map(actor => actor.name).join(', ')}
                  {movie.cast.length > 4 && ' и другие'}
                </span>
              </div>
            </div>
          </div>

          <div className="watch-section">
            <h2>Смотреть фильм</h2>
            <div className="video-container">
              <iframe
                src={movie.trailer}
                frameBorder="0"
                allow="fullscreen"
                allowFullScreen
                title={`Трейлер ${movie.title}`}
              ></iframe>
            </div>
          </div>

          <div className="cast-section">
            <h2>Актерский состав</h2>
            <div className="cast-grid">
              {movie.cast.map((actor, index) => (
                <div key={index} className="cast-member">
                  <img 
                    src={actor.photo} 
                    alt={actor.name} 
                    className="actor-photo"
                    onError={handleImageError}
                  />
                  <div className="actor-info">
                    <div className="actor-name">{actor.name}</div>
                    <div className="actor-role">{actor.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <div className="movie-poster">
        <img src={movie.poster} alt={movie.title} />
        <div className="movie-rating">{movie.rating}</div>
      </div>
      <div className="movie-info">
        <h3>{movie.title} ({movie.year})</h3>
        <p>{movie.genre}</p>
        <button 
          className="add-to-list"
          onClick={(e) => e.preventDefault()}
        >
          + Мой список
        </button>
      </div>
    </Link>
  );
}

function Home() {
  const [movies, setMovies] = useState([]);
  const [ratedMovies, setRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Загрузка популярных фильмов
        const moviesResponse = await fetch('/api/movies/');
        const moviesData = await moviesResponse.json();
        
        // Загрузка оцененных фильмов
        const ratedResponse = await fetch('/api/rated-movies/');
        const ratedData = await ratedResponse.json();

        setMovies(moviesData);
        setRatedMovies(ratedData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Загрузка...</div>;
  }

  if (error) {
    return <div className="error">Ошибка: {error}</div>;
  }

  return (
    <main className="main-content">
      <section className="hero-section">
        <h1>Отслеживайте фильмы, которые вы смотрели</h1>
        <p>Добавляйте оценки, составляйте списки и открывайте для себя новые фильмы</p>
      </section>

      <section className="movies-section">
        <h2>Популярные фильмы</h2>
        <div className="movies-grid">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      <section className="movies-section">
        <h2>Мои оценки</h2>
        <div className="movies-grid">
          {ratedMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/" className="navbar-brand">Kakte.movie</Link>
          <div className="navbar-search">
            <input type="text" placeholder="Поиск фильмов..." />
            <button>Найти</button>
          </div>
          <div className="navbar-links">
            <Link to="/top">Топ фильмы</Link>
            <Link to="/new">Новинки</Link>
            <Link to="/watchlist">Мой список</Link>
            <Link to="/account" className="account-link">Мой аккаунт</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="*" element={
            <div className="not-found">
              <h2>404 - Страница не найдена</h2>
              <Link to="/">Вернуться на главную</Link>
            </div>
          } />
        </Routes>

        <footer className="footer">
          <p>© 2023 Kakte.movie. Все права защищены.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;