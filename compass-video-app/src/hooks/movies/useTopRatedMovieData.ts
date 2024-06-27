import { useMovieData } from "./useMovieData";

const baseUrl : string = import.meta.env.VITE_API_BASE_URL;
const path: string = import.meta.env.VITE_API_LISTS_MOVIE_PATH;
const endpoint : string = import.meta.env.VITE_API_TOP_RATED_MOVIE_ENDPOINT;

const topRatedUrl = baseUrl + path + endpoint;

export function useTopRatedMovieData() {
    return useMovieData(topRatedUrl);
}