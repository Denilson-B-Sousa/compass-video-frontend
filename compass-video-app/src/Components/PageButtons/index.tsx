import { Button } from "@components/Button";
import playblack from "@assets/Images/icon/play-black.svg";
import info from "@assets/Images/icon/info.svg";
import star from "@assets/Images/icon/star.svg";
import plus from "@assets/Images/icon/plus.svg";
import { Tooltip } from "react-tooltip";

export function PageButtons() {
  return (
    <div className="mt-5 flex flex-col md:flex-row gap-3">
      <Tooltip
        id="my-tooltip"
        place="top"
        className="font-worksans text-neutral-600 font-semibold"
      />

      <Button secondary size="secoundary">
        <img src={playblack} alt="" className="mr-3" />
        Ver Agora
      </Button>
      <Button outlined size="primary">
        <img src={info} alt="" className="mr-3" />
        Mais Informações
      </Button>
      <div className="flex gap-4 items-center">
        <Button
          outlinedSecondary
          size="default"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Adicionar à “assistir mais tarde”"
          data-tooltip-variant="light"
        >
          <img src={plus} />
        </Button>
        <Button
          outlinedSecondary
          size="default"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Adicionar aos favoritos"
          data-tooltip-variant="light"
        >
          <img src={star} alt="" />
        </Button>
      </div>
    </div>
  );
}
