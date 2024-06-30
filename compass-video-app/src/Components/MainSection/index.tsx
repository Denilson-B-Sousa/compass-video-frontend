import { PageButtons } from '@components/PageButtons'
import { useEffect, useState } from 'react';

interface MainType{
    type: "movie" | "tv";
    topInfo: boolean;
}

interface Data{
  id: number;
  backdrop_path: string;
  title: string;
  name: string;
  release_date: string;
  first_air_date: string;
  genre_ids: [];
  overview: string;
  media_type: string;
}

interface Gender{
    id: number;
    name: string;
}

export function MainSection({ type, topInfo }: MainType) {

    const [data, setData] = useState<Data>();
    const [genders, setGenders] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDAxYzQwNzg2YjMxNGViYjI1ZWRjY2JiZGE0NDVmNyIsIm5iZiI6MTcxOTI1NzYzNC4wNjU0Miwic3ViIjoiNjY3OWM3MDliN2JiOGVjYmZlOGE0YmU1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.OmEXRdoZEQA3u5pgE-Hg1K_XvpOXDxds1v-JjvdJiJk'
        }
        };

    const handleSearch = async (type: string) => {
    
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/${type}/day?language=pt-BR`,
        options
      );
      const response_data = await response.json();
      setData(response_data.results[Math.floor(Math.random() * 20)]);
      console.log(data)
      writeGenresById(data!.genre_ids);
    } catch (err) {
      console.error("Erro ao dados:", err);
    }
  };

  const writeGenresById = async(gendersIds: number[]) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/${type}/list?language=pt-BR`,
        options
      );
      const response_data = await response.json();

      const gendersMap = {};
      response_data.genres.forEach((gender: Gender) => {
          gendersMap[gender.id] = gender.name;
      })
        const genderNames = gendersIds.map(id => gendersMap[id]);

        if(genderNames){
            setGenders(genderNames);
        } else setGenders([])

    } catch (err) {
      console.error("Erro ao dados:", err);
    }
  }
 

  useEffect(() => {
    handleSearch(type);
  }, [type]);

    useEffect(() => {
        writeGenresById(data?.genre_ids);
    }, [data])


  const gradient = `
    linear-gradient(221.31deg, rgba(26, 29, 41, 0) 49.29%, rgba(26, 29, 41, 0.791667) 77.96%, #1A1D29 97.36%), 
    linear-gradient(179.79deg, rgba(26, 29, 41, 0) 15.81%, rgba(26, 29, 41, 0.791667) 64.73%, #1A1D29 97.83%)
  `;

  return (
    <>
    {data && 
    <div className={`bg-cover bg-center ${topInfo ? "pt-60 md:pt-20" : "pt-60"}`} style={{ backgroundImage: `${gradient}, url(https://image.tmdb.org/t/p/original${data.backdrop_path})` }}>
        <div className="h-full">
          <div className={`h-full p-8 ${topInfo && "flex flex-col"}`}>
            {topInfo && (<div className='flex gap-3 items-center mb-28'>
            <p className='text-3xl text-white font-lato'>{type === "movie" ? "Filmes" : "Séries"}</p>
            <select
          className="bg-neutral-600/90 text-white rounded-full p-0.5 border-2 border-[#FFFFFF1F]"
        >
          <option disabled selected hidden className="text-white">
            Gêneros
          </option>
          <option className="text-white">
            {type === "movie" ? "Animação" : "Ação"}
          </option>
          <option className="text-white">
            Aventura
          </option>
          <option className="text-white">
            {type === "movie" ? "Comédia" : "Documentário"}
          </option>
          <option className="text-white">
            {type === "movie" ? "Terror" : "Drama"}
          </option>
            </select>
          </div>)}
            <div className="md:w-1/2 flex flex-col gap-3">
              <h1 className="text-applications-high-emphasis font-worksans text-5xl font-bold tracking-wide">
                 {type === "movie" ? data.title: data.name}
              </h1>
              <p className="text-applications-high-emphasis font-worksans">
                {type === "movie" ? data.release_date.slice(0, 4) : data.first_air_date.slice(0, 4)}
              </p>
              <p className="text-applications-high-emphasis font-worksans text-sm">
                {genders.length > 1 ? (genders.join(', ')) : "Gêneros não informados"}
              </p>
              <p className="text-applications-high-emphasis font-worksans text-lg">
                {data.overview}
              </p>
              <PageButtons mediaId={data.id} mediaType={data.media_type}  />
            </div>
          </div>
        </div>
      </div>}
        
    </>
  )
}