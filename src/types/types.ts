export interface IImages{
    webp: {
        image_url: string
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
}

export interface IGenreData{
    count: number
    mal_id: number
    name: string
    url: string
}

