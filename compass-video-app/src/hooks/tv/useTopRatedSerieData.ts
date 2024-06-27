import { useSerieData } from "./useSerieData";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const path = import.meta.env.VITE_API_LISTS_TV_PATH;
const endpoint = import.meta.env.VITE_API_TOP_RATED_SERIE_ENDPOINT;

const topRatedSerieUrl = baseUrl + path + endpoint;

export function useTopRatedSerie() {
    return useSerieData(topRatedSerieUrl)
}