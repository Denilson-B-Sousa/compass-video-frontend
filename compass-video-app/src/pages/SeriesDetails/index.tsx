import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageButtons } from "@components/PageButtons";
import { Carousel } from '@components/Carousel';

interface SeriesDetail {
  id: number;
  name: string;
  poster_path: string;
  overview: string;
  first_air_date: string;
  vote_average: number;
  backdrop_path: string;
}

export function SeriesDetails() {
  const { id } = useParams<{ id: string }>();
  const [series, setSeries] = useState<SeriesDetail | null>(null);

  useEffect(() => {
    const fetchSeriesDetails = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      };

      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?language=pt-BR`, options);
        const data = await response.json();
        setSeries(data);
      } catch (err) {
        console.error('Erro ao obter os detalhes da série:', err);
      }
    };

    fetchSeriesDetails();
  }, [id]);

  if (!series) {
    return <div>Loading...</div>;
  }

  const gradient = `
  linear-gradient(221.31deg, rgba(26, 29, 41, 0) 49.29%, rgba(26, 29, 41, 0.791667) 77.96%, #1A1D29 97.36%), 
  linear-gradient(179.79deg, rgba(26, 29, 41, 0) 15.81%, rgba(26, 29, 41, 0.791667) 64.73%, #1A1D29 97.83%)
`;

  return (
    <div className={'bg-cover bg-center pt-60 px-8'} style={{ backgroundImage: `${gradient}, url(https://image.tmdb.org/t/p/original${series.backdrop_path})` }}>
      <div className="h-full p-8">
        <div className='md:w-1/2 flex flex-col gap-3'>
          <h2 className="text-applications-high-emphasis font-worksans text-5xl font-bold tracking-wide">{series.name}</h2>
          <p className="text-applications-high-emphasis font-worksans">{series.overview}</p>
          <p className="text-applications-high-emphasis font-worksans text-sm">First Air Date: {series.first_air_date}</p>
          <p className="text-applications-high-emphasis font-worksans text-lg">Rating: {series.vote_average}</p>
          <PageButtons mediaId={series.id} mediaType="tv" trailer={true} />
        </div>         
        <div className='pt-24'>
          <Carousel text='Temporadas' type='seasons' mediaType="tv" mediaId={id} />
          <Carousel text='Similares' type='similar' mediaType="tv" mediaId={id} />
        </div>
      </div>
    </div>
  );
}
