import { useMovieData } from "./useMovieData";

const baseUrl : string = import.meta.env.VITE_API_BASE_URL;
const path: string = import.meta.env.VITE_API_LISTS_MOVIE_PATH;
const endpoint : string = import.meta.env.VITE_API_UPCOMING_ENDPOINT;

const upcomingUrl = baseUrl + path + endpoint;

export function useUpcomingMovieData() {

    return useMovieData(upcomingUrl);
}