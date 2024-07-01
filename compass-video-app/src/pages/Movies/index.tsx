import { Carousel } from "@components/Carousel";
import { MainSection } from "@components/MainSection";

export function Movies(){
  return (
    <>
      <div className="bg-neutral-600">
      <MainSection type="movie" topInfo={true} />
      <div className="px-8 pb-8 py-14 md:p-8">
        <Carousel text="Lançamentos" type="moviesNowPlaying" mediaType="movie" />
        <Carousel text="Populares" type="moviesPopular" mediaType="movie"  />
        <Carousel text="Mais bem avaliadas" type="moviesTopRated" mediaType="movie"  />
        <Carousel text="Em breve" type="moviesUpComing" mediaType="movie"  />
      </div>
    </div>
    </>
  )
}