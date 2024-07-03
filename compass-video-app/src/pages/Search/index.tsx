import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import unknownImage from 'assets/Images/question-mark.jpg'

interface Data{
  id: number;
  title: string;
  name: string;
  poster_path: string;
  profile_path: string;
}

export function Search() {
  const { query } = useParams();
  const [data, setData] = useState<[]>([]);


  const formatQuery = (query: string) => {

    const parts = query.split('!');
    // Se houver apenas uma parte, assume que é apenas o search
    const search = parts[0];
    // Se houver mais de uma parte, a última parte é o type
    const type = parts.slice(1).join('!');

    return { search, type }
  }

  const { search, type } = formatQuery(query!);

  const handleSearch = async (search: string, type: string) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDAxYzQwNzg2YjMxNGViYjI1ZWRjY2JiZGE0NDVmNyIsIm5iZiI6MTcxOTI1NzYzNC4wNjU0Miwic3ViIjoiNjY3OWM3MDliN2JiOGVjYmZlOGE0YmU1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.OmEXRdoZEQA3u5pgE-Hg1K_XvpOXDxds1v-JjvdJiJk",
      },
    };

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/${type}?query=${search}&include_adult=false&language=pt-BR&page=1`,
        options
      );
      const data = await response.json();
      setData(data.results);
    } catch (err) {
      console.error("Erro ao dados:", err);
    }
  };

  useEffect(() => {
    switch (type) {
      case "Tudo":
        handleSearch(search, "multi");
        break;
      case "Filmes":
        handleSearch(search, "movie");
        break;
      case "Colecoes":
        handleSearch(search, "collection");
        break;
      case "Series":
        handleSearch(search, "tv");
        break;
      case "Celebridades":
        handleSearch(search, "person");
        break;
    }
  }, [query, search, type]);

  const getImageSource = (dado: Data) => {
    if (dado.poster_path) {
      return `https://image.tmdb.org/t/p/w500${dado.poster_path}`;
    }

    if (dado.profile_path) {
      return `https://image.tmdb.org/t/p/w500${dado.profile_path}`;
    }

    return unknownImage;
  };

  return (
    <>
      <div className="bg-neutral-600 p-8 h-full pt-56 md:pt-20">
        <h2 className="font-worksans text-applications-medium-emphasis text-lg mb-3">
          Resultados para sua busca:
          <span className="text-white"> "{search.length == 0 ? `${type}` : `${search}`}"</span>
        </h2>
        {data.length > 0 ? (
          <div className="flex flex-wrap justify-center h-full">
            {data.map((dado: Data) => (
              <div key={dado.id} className="p-2 flex justify-center items-center group cursor-default">
                <img
                  src={getImageSource(dado)}
                  alt={dado.title || dado.name}
                  className="w-40 rounded-lg h-full group-hover:opacity-30"
                />
                <p className="imageCard opacity-0 group-hover:opacity-100">{dado.title || dado.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-neutral-600 h-screen">
          <p className="font-worksans text-applications-medium-emphasis">
            Não foram encontrados resultados para a sua busca.
          </p>
          </div>
        )}
      </div>
    </>
  );
}
