import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export function Carousel() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const VITE_API_MOVIES = import.meta.env.VITE_API_MOVIES;

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
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          options
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        console.error("Erro ao obter os filmes:", err);
      }
    };

    fetchMovies();
  }, [VITE_API_MOVIES]);

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
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

  return (
    <div className="p-4">
      <h2 className="text-white text-xl font-bold">Filmes em alta</h2>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="p-2">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto gap-5 rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
