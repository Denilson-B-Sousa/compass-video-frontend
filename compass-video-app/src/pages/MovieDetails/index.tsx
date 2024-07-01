import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageButtons } from "@components/PageButtons";
import { Carousel } from '@components/Carousel';

interface MediaDetail {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
}

export function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [media, setMedia] = useState<MediaDetail | null>(null);

  useEffect(() => {
    const fetchMediaDetails = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      };

      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`, options);
        const data = await response.json();
        setMedia(data);
      } catch (err) {
        console.error('Erro ao obter os detalhes do filme:', err);
      }
    };

    fetchMediaDetails();
  }, [id]);

  if (!media) {
    return <div>Loading...</div>;
  }

  const gradient = `
  linear-gradient(221.31deg, rgba(26, 29, 41, 0) 49.29%, rgba(26, 29, 41, 0.791667) 77.96%, #1A1D29 97.36%), 
  linear-gradient(179.79deg, rgba(26, 29, 41, 0) 15.81%, rgba(26, 29, 41, 0.791667) 64.73%, #1A1D29 97.83%)
`;

  return (
    <div className={'bg-cover bg-center pt-60 px-8'} style={{ backgroundImage: `${gradient}, url(https://image.tmdb.org/t/p/original${media.backdrop_path})` }}>
      <div className="h-full p-8">
        <div className='md:w-1/2 flex flex-col gap-3'>
          <h2 className="text-applications-high-emphasis font-worksans text-5xl font-bold tracking-wide">{media.title}</h2>
          <p className="text-applications-high-emphasis font-worksans">{media.overview}</p>
          <p className="text-applications-high-emphasis font-worksans text-sm">Release Date: {media.release_date}</p>
          <p className="text-applications-high-emphasis font-worksans text-lg">Rating: {media.vote_average}</p>
          <PageButtons mediaId={media.id} mediaType="movie" trailer={true} />
        </div>         
        <div className='pt-24'>
          <Carousel text='Similares' type='similar' mediaType="movie" mediaId={id} />
        </div>
      </div>
    </div>
  );
}
