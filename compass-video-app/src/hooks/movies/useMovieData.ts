import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Movie, MovieResponse } from "types/Movie";

const VITE_API_TOKEN = import.meta.env.VITE_API_TOKEN;

const fetchData = async (url: string): Promise<Movie[]> => {
    try {
        const response = await axios.get<MovieResponse>(url, {
            headers: {
                'Authorization': `Bearer ${VITE_API_TOKEN}`,
                'accept': 'application/json'
            }
        });
        
        return response.data.results;
    } catch (error) {
        console.log(error);
        return []
    }
    
}
    
export function useMovieData(endpoint: string) {
    const query = useQuery<Movie[], Error>({
        queryFn: () => fetchData(endpoint),
        queryKey: ['movie-data', endpoint]
    })

    return {
       ...query,
       data: query.data ?? []
    }
}