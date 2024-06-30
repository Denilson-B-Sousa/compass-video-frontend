import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    case "movies":
      apiUrl = "https://api.themoviedb.org/3/trending/movie/day?language=pt-BR"
      break;
    case "favoriteMovies":
      apiUrl = `https://api.themoviedb.org/3/account/${accountId}/favorite/movies?language=pt-BR`
      break;
    case "favoriteSeries":
      apiUrl = `https://api.themoviedb.org/3/account/${accountId}/favorite/tv?language=pt-BR`
      break;
    case "series":
      apiUrl = "https://api.themoviedb.org/3/trending/tv/day?language=pt-BR"
      break;
    case "collections":
      apiUrl = "nao existe ainda"
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
        setMedia(data.results);
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
      <h2 className="text-white text-xl font-bold">{text}</h2>
      {media.length > 0 ? (
        <Slider {...settings}>
        {media.map((media: Media) => (
          <div key={media.id} className="p-2">
            <img
              src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
              alt={media.title}
              className="w-full h-auto gap-5 rounded-lg"
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
