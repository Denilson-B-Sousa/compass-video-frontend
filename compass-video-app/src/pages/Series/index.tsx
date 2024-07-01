import { Carousel } from "@components/Carousel";
import { MainSection } from "@components/MainSection";

export function Series(){
  return (
    <>
      <div className="bg-neutral-600">
      <MainSection type="tv" topInfo={true} />
      <div className="px-8 pb-8 py-14 md:p-8">
        <Carousel text="Lançamentos" type="series" mediaType="tv"  />
        <Carousel text="Populares" type="seriesPopular" mediaType="tv"  />
        <Carousel text="Estão no ar" type="seriesOnTheAir" mediaType="tv"  />
        <Carousel text="Mais bem avaliadas" type="seriesTopRated" mediaType="tv"  />
      </div>
    </div>
    </>
  )
}