import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import { useMovieData } from '../../hooks/movies/useMovieData';



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
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
