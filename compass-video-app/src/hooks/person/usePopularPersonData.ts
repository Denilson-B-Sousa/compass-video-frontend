import { usePersonData } from "./usePersonData";

const baseUrl : string = import.meta.env.VITE_API_BASE_URL;
// const apiKey : string = import.meta.env.VITE_API_KEY;
const path : string = import.meta.env.VITE_API_POPULAR_PERSON_PATH;
const endpoint: string = import.meta.env.VITE_API_PERSON_ENDPOINT;

const urlPersonData : string =  baseUrl + path + endpoint;

export function usePopularPersonData() {
    return usePersonData(urlPersonData)
}