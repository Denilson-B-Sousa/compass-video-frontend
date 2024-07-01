import { Carousel } from "@components/Carousel";


export function MyLists(){

  return (
    <>
    <div className="bg-neutral-600 p-8 h-full pt-56 md:pt-20">
      <h2 className="font-lato text-white font-bold text-2xl mb-2 tracking-wide">
        Minhas Listas
      </h2>
      <p className="font-lato text-sm text-applications-medium-emphasis mb-10">
        Listas criadas por você de acordo com seus gostos
      </p>
      <div className="gap-3">
        <Carousel text="Filmes Favoritos" type="favoriteMovies" mediaType="movie" myLists={true} />
        <Carousel text="Séries Favoritas" type="favoriteSeries" mediaType="tv" myLists={true} />
        <Carousel text="Filmes para ver mais tarde" type="watchlistMovies" mediaType="movie" myLists={true} />
        <Carousel text="Séries para ver mais tarde" type="watchlistSeries" mediaType="tv" myLists={true} />
      </div>
    </div>
    </>
  )
}