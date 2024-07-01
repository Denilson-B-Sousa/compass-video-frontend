import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import unknownImage from 'assets/Images/question-mark.jpg';

interface Episode {
  id: number;
  name: string;
  overview: string;
  still_path: string;
  episode_number: number;
  runtime: number;
}

interface Season {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  episodes: Episode[];
}

export function SeasonDetails() {
  const { id, seasonNumber } = useParams<{ id: string; seasonNumber: string }>();
  const [season, setSeason] = useState<Season | null>(null);

  useEffect(() => {
    const fetchSeasonDetails = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      };

      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}?language=pt-BR`, options);
        const data = await response.json();
        setSeason(data);
      } catch (err) {
        console.error('Erro ao obter os detalhes da temporada:', err);
      }
    };

    fetchSeasonDetails();
  }, [id, seasonNumber]);

  if (!season) {
    return <div>Loading...</div>;
  }

  const getImageSource = (path: string) => {
    if (path) {
      return `https://image.tmdb.org/t/p/w500${path}`;
    }
    return unknownImage;
  };

  return (
    <div className="bg-cover bg-center pt-60 px-8" style={{ backgroundImage: `url(${getImageSource(season.poster_path)})` }}>
      <div className="h-full p-8">
        <div className='md:w-1/2 flex flex-col gap-3'>
          <h2 className="text-applications-high-emphasis font-worksans text-5xl font-bold tracking-wide">{season.name}</h2>
          <p className="text-applications-high-emphasis font-worksans">{season.overview}</p>
        </div>         
        <div className='pt-24'>
          <h2 className="text-white text-xl font-bold">Episódios</h2>
          <div className="flex flex-col gap-5">
            {season.episodes.map((episode: Episode) => (
              <div key={episode.id} className="flex gap-5">
                <img
                  src={getImageSource(episode.still_path)}
                  alt={episode.name}
                  className="w-32 h-20 object-cover rounded-lg"
                />
                <div className="flex flex-col">
                  <h3 className="text-white text-lg font-bold">{episode.episode_number}. {episode.name}</h3>
                  <p className="text-white">{episode.overview}</p>
                  <p className="text-white">{episode.runtime} min</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
