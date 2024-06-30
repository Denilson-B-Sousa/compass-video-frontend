import { Carousel } from "@components/Carousel";
import { MainSection } from "@components/MainSection";

export function Home() {
  return (
    <div className="bg-neutral-600">
      <MainSection type="movie" topInfo={false} />
      <div className="px-8 pb-8 py-14 md:p-8">
        <Carousel text="Coleções de Halloween" type="collections" />
        <Carousel text="Séries em alta" type="series" />
        <Carousel text="Filmes em alta" type="movies" />
      </div>
    </div>
  );
}
