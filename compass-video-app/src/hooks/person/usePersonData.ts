import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Person, PeopleResponse} from "types/Person";

 const VITE_API_TOKEN = import.meta.env.VITE_API_TOKEN;


const fetchData = async (url: string): Promise<Person[]> => {
    try {
        const response = await axios.get<PeopleResponse>(url, {
            headers: {
                'Authorization': `Bearer ${VITE_API_TOKEN}`,
                'accept': 'application/json',

            }
        });

        console.log(response.data.results)
        
        return response.data.results ?? [];
    } catch (error) {
        console.log(error);
        return []
    }
    
}
    
export function usePersonData(endpoint: string) {
    const query = useQuery<Person[], Error>({
        queryFn:  () => fetchData(endpoint),
        queryKey: ['person-data', endpoint]
    })

    return {
       ...query,
       data: query.data ?? []
    }
}