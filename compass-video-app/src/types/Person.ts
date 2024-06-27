export type Person = {
    adult: boolean  ;
    gender: number ;
    id: number ;
    known_for_department: string ;
    name: string ;
    original_name: string ;
    popularity: number ;
    profile_path: string | null; 
    known_for: KnownForItem[] ;
};

export type KnownForItem = {
    backdrop_path: string | null; 
    id: number;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string | null; 
    media_type: "movie" | "tv";
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    release_date?: string; 
    vote_average: number;
    vote_count: number;
};

export type PeopleResponse = {
    page: number;
    results: Person[];
    total_pages: number;
    total_results: number;
};