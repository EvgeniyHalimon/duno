export interface IImages{
    webp: {
        image_url: string,
        large_image_url?: string
    }
}

export interface IAiredNPublished{
    string: string
}

export interface IGenre{
    map(arg0: (genre: IGenre) => JSX.Element): import("react").ReactNode;
    mal_id: number
    name: string
}

export interface IInitialStateAnimes{
    animes: ITitle | [],
    randomAnimes: ITitle[],
    animeError: boolean,
    paginatedAnimes: ITitle | [],
    lastAnimePage: number,
    isAnime: boolean,
    animeSearchResult: ITitle[] | [],
    searchAnimeValue: string,
    animeGenres: IGenreData | [] | boolean,
    animeByGenre: ITitle | [],
    currentAnimeTitle: ITitle | [],
    currentAnimePage: number,
    popularAnime: ITitle | [],
    animeReviews: any
}

export interface IInitialStateMangas{
    mangas: ITitle | [] ,
    mangaError: boolean,
    randomMangas: ITitle[],
    paginatedMangas: ITitle | [],
    lastMangaPage: number,
    isManga: boolean,
    mangaSearchResult: ITitle | [],
    searchMangaValue: string,
    mangaGenres: IGenreData | [] | boolean,
    mangaByGenre: ITitle | [],
    currentMangaTitle: ITitle | [],
    currentMangaPage: number,
    popularManga: ITitle | [],
    mangaReviews: any
}

export interface ITitle{
    [x: string]: any;
    url?: string
    title?: string
    title_japanese?: string
    type?: string
    score?: string | null
    scored?: string | null
    rank?: string | null
    synopsis?: string | null
    images?: IImages
    aired?: IAiredNPublished | null
    published?: IAiredNPublished | null
    genres?: IGenre,
    duration?: string,
    episodes?: number,
    chapters?: number,
    scored_by?: number,
    rating?: string,
    status?: string,
    mal_id?: number | undefined
}

export interface IGenreData{
    count: number
    mal_id: number
    name: string
    url: string
}

export interface IReview{
    episodes_watch?: number,
    chapters_read?: number,
    review: string,
    type: string,
    user: {
        username: string,
        images: IImages
    },
    scores: {
        overall: number,
        story: number,
        art: number,
        character: number,
        enjoyment: number,
        sound?: number
    }
}