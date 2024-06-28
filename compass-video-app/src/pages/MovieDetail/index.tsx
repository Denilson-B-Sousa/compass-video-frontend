import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageButtons } from "@components/PageButtons"
import { Carousel } from '@components/Carousel';

interface MovieDetail {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export function MovieDetail () {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetail | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      };

      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
        const data = await response.json();
        setMovie(data);
      } catch (err) {
        console.error('Erro ao obter os detalhes do filme:', err);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const gradient = `
  linear-gradient(221.31deg, rgba(26, 29, 41, 0) 49.29%, rgba(26, 29, 41, 0.791667) 77.96%, #1A1D29 97.36%), 
  linear-gradient(179.79deg, rgba(26, 29, 41, 0) 15.81%, rgba(26, 29, 41, 0.791667) 64.73%, #1A1D29 97.83%)
`;

  return (
    <div className={'bg-cover bg-center pt-60'} style={{ backgroundImage: `${gradient}, url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
      <h2 className="text-applications-high-emphasis font-worksans text-5xl font-bold tracking-wide">{movie.title}</h2>
      <p className="text-applications-high-emphasis font-worksans">{movie.overview}</p>
      <p className="text-applications-high-emphasis font-worksans">Release Date: {movie.release_date}</p>
      <p className="text-applications-high-emphasis font-worksans">Rating: {movie.vote_average}</p>
      <PageButtons />
      <div>
        <Carousel/>
      </div>
    </div>

  );
}
