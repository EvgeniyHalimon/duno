export interface IImages{
    webp: {
        image_url: string
    }
}

export interface IAiredNPublished{
    string: string
}

export interface IGenres{
    map(arg0: (genre: IGenres) => JSX.Element): import("react").ReactNode;
    mal_id: number
    name: string
}

export interface IInitialStateAnimes{
    animes: ITitles | [],
    randomAnimes: ITitles[],
    animeError: boolean,
    paginatedAnimes: ITitles | [],
    lastAnimePage: number,
    isAnime: boolean,
    animeSearchResult: ITitles[] | [],
    searchAnimeValue: string
}

export interface IInitialStateMangas{
    mangas: ITitles | [] ,
    mangaError: boolean,
    randomMangas: ITitles[],
    paginatedMangas: ITitles | [],
    lastMangaPage: number,
    isManga: boolean,
    mangaSearchResult: ITitles | [],
    searchMangaValue: string,
}

export interface ITitles{
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
    genres?: IGenres,
}



