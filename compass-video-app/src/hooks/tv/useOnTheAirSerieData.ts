import { useSerieData } from "./useSerieData";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const path = import.meta.env.VITE_API_LISTS_TV_PATH;
const endpoint = import.meta.env.VITE_API_ON_THE_AIR_SERIE_ENDPOINT;

const onTheAirSerieUrl = baseUrl + path + endpoint;

export function useOnTheAirSerieData() {
    return useSerieData(onTheAirSerieUrl);
}