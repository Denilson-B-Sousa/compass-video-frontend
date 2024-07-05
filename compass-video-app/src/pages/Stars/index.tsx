import { Carousel } from "@components/Carousel";
import { MainSection } from "@components/MainSection";
import { useEffect, useState } from "react";
import unknownImage from 'assets/Images/question-mark.jpg'

interface Star{
  id: number;
  name: string;
  profile_path: string;
  known_for: [];
}

export function Stars(){

  const [stars, setStars] = useState([])
  // Foi adicionado essa constante pois as pessoas que possuem os seguintes ID's possuem filmes adultos.
  const forbiddenIds = [1647345, 1622390, 1708576, 2710789, 2349944, 2484644, 3164807, 3194176];

  const handleStarSearch = async () => {

    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDAxYzQwNzg2YjMxNGViYjI1ZWRjY2JiZGE0NDVmNyIsIm5iZiI6MTcxOTI1NzYzNC4wNjU0Miwic3ViIjoiNjY3OWM3MDliN2JiOGVjYmZlOGE0YmU1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.OmEXRdoZEQA3u5pgE-Hg1K_XvpOXDxds1v-JjvdJiJk'
  }
};
    
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/trending/person/day?language=pt-BR',
        options
      );
      const response_data = await response.json();
      const newStars: string[] = [];
      while (newStars.length < 2){
        const randomN = Math.floor(Math.random() * response_data.results.length);
        const randomStar = response_data.results[randomN];

        if(!forbiddenIds.includes(randomStar.id)){
            if(!newStars.some(star => star.id === randomStar.id)){
              newStars.push(randomStar)
            }
        }
      }
      console.log(newStars);
      setStars(prevStars => [...prevStars, ...newStars]);
    } catch (err) {
      console.error("Erro ao dados:", err);
    }
  };



  useEffect(() => {
    handleStarSearch();
  }, []);

  const getImageSource = (star: Star) => {

    if (star.profile_path) {
      return `https://image.tmdb.org/t/p/w500${star.profile_path}`;
    }

    return unknownImage;
  };

  return (
    <>
      <div className="bg-neutral-600">
      <MainSection type="movie" topInfo={false}  />
      <div className="px-8 pb-8 py-14 md:p-8">
        {stars.map((star: Star) => (
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex flex-col md:flex-row gap-12 items-center w-full">
              <div className="flex flex-col gap-3 w-52" >
                <p className="font-worksans font-medium text-white text-center">{star.name}</p>
                <img 
                src={getImageSource(star)} 
                alt={star.name}
                className="w-40 rounded-lg h-full"
                />
              </div>
              <Carousel text="Conhecido(a) por" type="knownFor" knownFor={star.known_for} />
            </div>
            
          </div>
        ))}
      </div>
    </div>
    </>
  )
}