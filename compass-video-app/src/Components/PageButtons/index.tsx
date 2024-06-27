import { Button } from "@components/Button";
import playblack from "@assets/Images/icon/play-black.svg";
import info from "@assets/Images/icon/info.svg";
import star from "@assets/Images/icon/star.svg";
import plus from "@assets/Images/icon/plus.svg";
import { Tooltip } from "react-tooltip";
import { useState } from "react";
import { Check } from "@phosphor-icons/react";

export function PageButtons() {

  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isOnList, setIsOnList] = useState<boolean>(false);

  const handleAddToFavorites = () => {
    if(!isFavorite){
      setIsFavorite(true);
    } else setIsFavorite(false);
  }

  const handleAddToList = () => {
    if(!isOnList){
      setIsOnList(true);
    } else setIsOnList(false);
  }

  return (
    <div className="mt-5 flex flex-col md:flex-row gap-5">
      <Tooltip
        id="my-tooltip"
        place="top"
        className="font-worksans text-neutral-600 font-semibold"
      />

      <Button secondary size="primary">
        <img src={playblack} alt="" className="mr-3" />
        Ver Agora
      </Button>
      <Button outlined size="primary">
        <img src={info} alt="" className="mr-3" />
        Mais Informações
      </Button>
      <div className="flex gap-4 items-center">

         {!isOnList ? (
          <Button
          outlinedSecondary
          size="default"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Adicionar à “assistir mais tarde”"
          data-tooltip-variant="light"
          onClick={handleAddToList}
        >
          <img src={plus} />
        </Button>
        ) : (
          <Button
          outlinedSecondary
          size="default"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Em “assistir mais tarde”"
          data-tooltip-variant="light"
          onClick={handleAddToList}
        >
          <Check size={24} weight="bold" color="#02E7F5" />
        </Button>
        )}

        

        {!isFavorite ? (
          <Button
          outlinedSecondary
          size="default"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Adicionar aos favoritos"
          data-tooltip-variant="light"
          onClick={handleAddToFavorites}
        >
          <img src={star} alt="" />
        </Button>
        ) : (
          <Button
          outlinedSecondary
          size="default"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Favorito"
          data-tooltip-variant="light"
          onClick={handleAddToFavorites}
        >
          <Check size={24} weight="bold" color="#02E7F5" />
        </Button>
        )}

      </div>
    </div>
  );
}
