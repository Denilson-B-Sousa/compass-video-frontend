import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import { useMovieData } from '../../hooks/movies/useMovieData';


interface CarouselProps{
  text: string;
  type: string;
}

interface Media{
  id: number;
  title: string;
  poster_path: string;
}

export function Carousel({text, type}: CarouselProps) {
  const [media, setMedia] = useState([]);
  const VITE_API_MOVIES = import.meta.env.VITE_API_MOVIES;
  const accountId = 21347274;
  let apiUrl: string;

  switch(type){
    case "favoriteMovies":
      apiUrl = `https://api.themoviedb.org/3/account/${accountId}/favorite/movies?language=pt-BR`
      break;
    case "favoriteSeries":
      apiUrl = `https://api.themoviedb.org/3/account/${accountId}/favorite/tv?language=pt-BR`
      break;
    case "movies":
      apiUrl = "https://api.themoviedb.org/3/trending/movie/day?language=pt-BR"
      break;
    case "moviesNowPlaying":
      apiUrl = "https://api.themoviedb.org/3/movie/now_playing?language=pt-BR"
      break;
    case "moviesPopular":
      apiUrl = "https://api.themoviedb.org/3/movie/popular?language=pt-BR"
      break;
    case "moviesTopRated":
      apiUrl = "https://api.themoviedb.org/3/movie/top_rated?language=pt-BR"
      break;
    case "moviesUpComing":
      apiUrl = "https://api.themoviedb.org/3/movie/upcoming?language=pt-BR"
      break;
    case "series":
      apiUrl = "https://api.themoviedb.org/3/trending/tv/day?language=pt-BR"
      break;
    case "seriesPopular":
      apiUrl = "https://api.themoviedb.org/3/tv/popular?language=pt-BR"
      break;
    case "seriesOnTheAir":
      apiUrl = "https://api.themoviedb.org/3/tv/on_the_air?language=pt-BR"
      break;
    case "seriesTopRated":
      apiUrl = "https://api.themoviedb.org/3/tv/top_rated?language=pt-BR"
      break;
    case "halloweenCollection":
      apiUrl = "https://api.themoviedb.org/3/list/8305004?language=pt-BR&page=1"
      break;
    case "knownFor":
      apiUrl = "nao existe ainda"
      break;
  }

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDAxYzQwNzg2YjMxNGViYjI1ZWRjY2JiZGE0NDVmNyIsIm5iZiI6MTcxOTUwODY5My4xMzU4MzMsInN1YiI6IjY2NzljNzA5YjdiYjhlY2JmZThhNGJlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.98f5UpCKgwBsLq-rCwqlVrcaFUd3Kta4-8LMcPsEGac",
        },
      };

      try {
        const response = await fetch(
          apiUrl,
          options
        );
        const data = await response.json();
        
        if(type === "halloweenCollection"){
          setMedia(data.items);
        } else setMedia(data.results);

      } catch (err) {
        console.error("Erro ao obter os filmes:", err);
      }
    };

export function Carousel() {
  const navigate = useNavigate();
  const { data: movies, error, isLoading } = useMovieData('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1');

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleMovieClick = (id: number) => {
    navigate(`/movie/${id}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading movies</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-white text-xl font-bold">Filmes em alta</h2>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="p-2" onClick={() => handleMovieClick(movie.id)}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="border-none cursor-pointer w-full h-auto gap-5 rounded-lg"
    const getImageSource = (media: Media) => {
    if (media.poster_path) {
      return `https://image.tmdb.org/t/p/w500${media.poster_path}`;
    }

    return "../src/assets/Images/question-mark.jpg";
  };

  return (
    <div className="p-4">
      <h2 className="text-white text-xl font-bold">{text}</h2>
      {media.length > 0 ? (
        <Slider {...settings}>
        {media.map((media: Media) => (
          <div key={media.id} className="p-2">
            <img
              src={getImageSource(media)}
              alt={media.title}
              className="w-full gap-5 rounded-lg"
            />
          </div>
        ))}
      </Slider>
      ) : (
        <p className="text-white font-worksans text-center">Sem informações</p>
      )}
    </div>
  );
}
