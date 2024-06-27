import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TVShowsResponse, TVShow  } from "types/Tv";

const VITE_API_TOKEN = import.meta.env.VITE_API_TOKEN;

const fetchData = async (url: string): Promise<TVShow[]> => {
    try {
        const response = await axios.get<TVShowsResponse>(url, {
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
    
export function useSerieData(endpoint: string) {
    const query = useQuery<TVShow[], Error>({
        queryFn: () => fetchData(endpoint),
        queryKey: ['serie-data', endpoint]
    })

    return {
       ...query,
       data: query.data ?? []
    }
}