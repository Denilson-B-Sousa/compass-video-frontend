import { PageButtons } from "@components/PageButtons"

export function Home() {
  return (
    <div className="bg-main-movie pt-60 md:pt-0">
      <div className="h-[130vh]">
        <div className=" h-full p-8 flex items-center">
          <div className="md:w-1/2 flex flex-col gap-3">
            <h1 className="text-applications-high-emphasis font-worksans text-5xl font-bold tracking-wide">
              Five Nights at Freddy's
            </h1>
            <p className="text-applications-high-emphasis font-worksans">
              2021 • 1 h 41 min
            </p>
            <p className="text-applications-high-emphasis font-worksans text-sm">
              Drama, Sci-Fi & Fantasy
            </p>
            <p className="text-applications-high-emphasis font-worksans text-lg">
              Recently fired and desperate for work, a troubled young man named
              Mike agrees to take a position as a night security guard at an
              abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon
              discovers that nothing at Freddy's is what it seems.
            </p>
            <PageButtons />
          </div>
        </div>
      </div>
      <div className="px-8 pb-8 md:p-8">
        <h2 className="text-white">Carrouseis</h2>
        <h2 className="text-white">Carrouseis</h2>
        <h2 className="text-white">Carrouseis</h2>
        <h2 className="text-white">Carrouseis</h2>
      </div>
    </div>
  );
}
