import { useSerieData } from "./useSerieData";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const path = import.meta.env.VITE_API_LISTS_TV_PATH;
const endpoint = import.meta.env.VITE_API_POPULAR_SERIE_ENDPOINT;

const PopularSerieUrl = baseUrl + path + endpoint;

export function usePopularSerieData() {
    return useSerieData(PopularSerieUrl)
}