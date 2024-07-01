import { Button } from "@components/Button";
import playblack from "@assets/Images/icon/play-black.svg";
import info from "@assets/Images/icon/info.svg";
import star from "@assets/Images/icon/star.svg";
import plus from "@assets/Images/icon/plus.svg";
import { Tooltip } from "react-tooltip";
import { useState } from "react";
import { Check } from "@phosphor-icons/react";
import { Player } from "@components/Player";

interface Media {
  mediaId: number;
  mediaType: string;
}

export function PageButtons({ mediaId, mediaType }: Media) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isOnList, setIsOnList] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const account_id = 21347274;

  const handleAddToFavorites = () => {
    if (!isFavorite) {
      Favorite(account_id, true);
      setIsFavorite(true);
    } else {
      Favorite(account_id, false);
      setIsFavorite(false);
    }
  };

  const handleAddToWatchList = () => {
    if (!isOnList) {
      setIsOnList(true);
    } else setIsOnList(false);
  };

  const handleOpenPlayer = () => {  
    if(!isOpen) {
      setIsOpen(true);
    } else setIsOpen(false)

  }

  const handleMoreInfo = () => {
    window.location.href = `/details/${mediaType}/${mediaId}`
  }

  const Favorite = async (accountId: number, favorite: boolean) => {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDAxYzQwNzg2YjMxNGViYjI1ZWRjY2JiZGE0NDVmNyIsIm5iZiI6MTcxOTI1NzYzNC4wNjU0Miwic3ViIjoiNjY3OWM3MDliN2JiOGVjYmZlOGE0YmU1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.OmEXRdoZEQA3u5pgE-Hg1K_XvpOXDxds1v-JjvdJiJk",
      },
       body: JSON.stringify({media_id: `${mediaId}`, media_type: `${mediaType}`, favorite: {favorite}})
    };
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/account/${accountId}/favorite`,
        options
      );
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error("Erro ao favoritar:", err);
    }
  };

  return (
    <div className="mt-5 flex flex-col md:flex-row gap-5">
      <Tooltip
        id="my-tooltip"
        place="top"
        className="font-worksans text-neutral-600 font-semibold"
      />

      <Button secondary size="primary" onClick={handleOpenPlayer}>
        <img src={playblack} alt="" className="mr-3" />
        Ver Agora
      </Button>
      <Button outlined size="primary" onClick={handleMoreInfo}>
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
            onClick={handleAddToWatchList}
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
            onClick={handleAddToWatchList}
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

      {isOpen ? <Player/> : null}
    </div>
  );
}
