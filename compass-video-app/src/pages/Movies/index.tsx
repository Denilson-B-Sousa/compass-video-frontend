import { Carousel } from "@components/Carousel";
import { MainSection } from "@components/MainSection";

export function Movies(){
  return (
    <>
      <div className="bg-neutral-600">
      <MainSection type="movie" topInfo={true} />
      <div className="px-8 pb-8 py-14 md:p-8">
        <Carousel text="Lançamentos" type="moviesNowPlaying" />
        <Carousel text="Populares" type="moviesPopular" />
        <Carousel text="Mais bem avaliadas" type="moviesTopRated" />
        <Carousel text="Em breve" type="moviesUpComing" />
      </div>
    </div>
    </>
  )
}