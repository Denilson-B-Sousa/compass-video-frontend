import { Carousel } from "@components/Carousel";
import { MainSection } from "@components/MainSection";

export function Series(){
  return (
    <>
      <div className="bg-neutral-600">
      <MainSection type="tv" topInfo={true} />
      <div className="px-8 pb-8 py-14 md:p-8">
        <Carousel />
        <Carousel />
        <Carousel />
      </div>
    </div>
    </>
  )
}