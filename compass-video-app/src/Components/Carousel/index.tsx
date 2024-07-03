import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import unknownImage from 'assets/Images/question-mark.jpg';

interface CarouselProps {
  text: string;
  type: string;
  mediaType?: string;
  mediaId?: string | number;
  knownFor?: [];
  myLists?: boolean;
}

interface Media {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  media_type?: string;
  season_number?: number;
}

export function Carousel({ text, type, mediaType, mediaId, knownFor, myLists }: CarouselProps) {
  const [media, setMedia] = useState<Media[]>([]);
  const VITE_API_MOVIES = import.meta.env.VITE_API_MOVIES;
  const accountId = localStorage.getItem('accountId');
  let apiUrl: string;

  switch (type) {
    case "favoriteMovies":
      apiUrl = `https://api.themoviedb.org/3/account/${accountId}/favorite/movies?language=pt-BR`;
      break;
    case "favoriteSeries":
      apiUrl = `https://api.themoviedb.org/3/account/${accountId}/favorite/tv?language=pt-BR`;
      break;
    case "watchlistMovies":
      apiUrl = `https://api.themoviedb.org/3/account/${accountId}/watchlist/movies?language=pt-BR`;
      break;
    case "watchlistSeries":
      apiUrl = `https://api.themoviedb.org/3/account/${accountId}/watchlist/tv?language=pt-BR`;
      break;
    case "movies":
      apiUrl = "https://api.themoviedb.org/3/trending/movie/day?language=pt-BR";
      break;
    case "moviesNowPlaying":
      apiUrl = "https://api.themoviedb.org/3/movie/now_playing?language=pt-BR";
      break;
    case "moviesPopular":
      apiUrl = "https://api.themoviedb.org/3/movie/popular?language=pt-BR";
      break;
    case "moviesTopRated":
      apiUrl = "https://api.themoviedb.org/3/movie/top_rated?language=pt-BR";
      break;
    case "moviesUpComing":
      apiUrl = "https://api.themoviedb.org/3/movie/upcoming?language=pt-BR";
      break;
    case "series":
      apiUrl = "https://api.themoviedb.org/3/trending/tv/day?language=pt-BR";
      break;
    case "seriesPopular":
      apiUrl = "https://api.themoviedb.org/3/tv/popular?language=pt-BR";
      break;
    case "seriesOnTheAir":
      apiUrl = "https://api.themoviedb.org/3/tv/on_the_air?language=pt-BR";
      break;
    case "seriesTopRated":
      apiUrl = "https://api.themoviedb.org/3/tv/top_rated?language=pt-BR";
      break;
    case "halloweenCollection":
      apiUrl = "https://api.themoviedb.org/3/list/8305004?language=pt-BR&page=1";
      break;
    case "similar":
      apiUrl = `https://api.themoviedb.org/3/${mediaType}/${mediaId}/similar?language=pt-BR&page=1`;
      break;
    case "seasons":
      apiUrl = `https://api.themoviedb.org/3/tv/${mediaId}?language=pt-BR`;
      break;
    default:
      return null;
  }

  useEffect(() => {
    if (knownFor) {
      setMedia(knownFor);
    } else {
      const fetchMedia = async () => {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDAxYzQwNzg2YjMxNGViYjI1ZWRjY2JiZGE0NDVmNyIsIm5iZiI6MTcxOTUwODY5My4xMzU4MzMsInN1YiI6IjY2NzljNzA5YjdiYjhlY2JmZThhNGJlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.98f5UpCKgwBsLq-rCwqlVrcaFUd3Kta4-8LMcPsEGac",
          },
        };

        try {
          const response = await fetch(apiUrl, options);
          const data = await response.json();

          if (type === "seasons") {
            setMedia(data.seasons);
          } else if (type === "halloweenCollection") {
            setMedia(data.items);
          } else {
            setMedia(data.results);
          }
        } catch (err) {
          console.error("Erro ao obter os dados:", err);
        }
      };

      fetchMedia();
    }
  }, [VITE_API_MOVIES, apiUrl]);

  const settings = {
    dots: false,
    infinite: false,
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

  const getImageSource = (media: Media) => {
    if (media.poster_path) {
      return `https://image.tmdb.org/t/p/w500${media.poster_path}`;
    }
    return unknownImage;
  };

  const removeFavorite = async (accountId: number, mediaId: number, mediaType: string) => {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDAxYzQwNzg2YjMxNGViYjI1ZWRjY2JiZGE0NDVmNyIsIm5iZiI6MTcxOTI1NzYzNC4wNjU0Miwic3ViIjoiNjY3OWM3MDliN2JiOGVjYmZlOGE0YmU1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.OmEXRdoZEQA3u5pgE-Hg1K_XvpOXDxds1v-JjvdJiJk",
      },
       body: JSON.stringify({media_id: `${mediaId}`, media_type: `${mediaType}`, favorite: false})
    };
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/account/${accountId}/favorite`,
        options
      );
      const data = await response.json();
    } catch (err) {
      console.error("Erro ao remover dos favoritos:", err);
    }
  };

  const removeWatchList = async (accountId: number, mediaId: number, mediaType: string) => {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDAxYzQwNzg2YjMxNGViYjI1ZWRjY2JiZGE0NDVmNyIsIm5iZiI6MTcxOTI1NzYzNC4wNjU0Miwic3ViIjoiNjY3OWM3MDliN2JiOGVjYmZlOGE0YmU1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.OmEXRdoZEQA3u5pgE-Hg1K_XvpOXDxds1v-JjvdJiJk",
      },
       body: JSON.stringify({media_id: `${mediaId}`, media_type: `${mediaType}`, watchlist: false})
    };
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/account/${accountId}/watchlist`,
        options
      );
      const data = await response.json();
    } catch (err) {
      console.error("Erro remover da lista de assistir mais tarde:", err);
    }
  };

  const handleRemoveItemFromList = (mediaId: number, mediaType: string) => {
    if(confirm("Você tem certeza que deseja remover esse item?")){
      if (type.includes("watchlist")) {
         removeWatchList(accountId, mediaId, mediaType)
      } else {
        removeFavorite(accountId, mediaId, mediaType);
      }
       setMedia(media.filter((media) => media.id !== mediaId));
    }
  }

  return (
    <div className="p-4 w-full">
      <h2 className="text-white text-xl font-bold">{text}</h2>
      {media.length > 0 ? (
        <Slider {...settings}>
         { myLists ? (
            media.map((media: Media) => (
            <div key={media.id} className="p-2">
              <div key={media.id} className="p-2 flex justify-center items-center group cursor-pointer" onClick={() => handleRemoveItemFromList(media.id, mediaType === "movie"  ? "movie" : "tv")}>
                <img
                  src={getImageSource(media)}
                  alt={media.title || media.name}
                  className="w-full gap-5 rounded-lg group-hover:opacity-30"
                />
                <p className="imageCard opacity-0 group-hover:opacity-100">Remover {media.title || media.name} de sua lista?</p>
              </div>
            </div>
          ))
          ) : (media.map((item: Media) => (
            <div key={item.id || item.season_number} className="p-2">
              {item.season_number !== undefined ? (
                <Link to={`/details/tv/${mediaId}/season/${item.season_number}`}>
                  <img
                    src={getImageSource(item)}
                    alt={item.name || `Season ${item.season_number}`}
                    className="w-full gap-5 rounded-lg"
                  />
                </Link>
              ) : (
                <Link to={`/details/${item.media_type || mediaType}/${item.id}`}>
                  <img
                    src={getImageSource(item)}
                    alt={item.title || item.name}
                    className="w-full gap-5 rounded-lg"
                  />
                </Link>
              )}
            </div>
          )))}
        </Slider>
      ) : (
        <p className="text-white font-worksans text-center">Sem informações</p>
      )}
    </div>
  );
}
