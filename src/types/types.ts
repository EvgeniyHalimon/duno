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
    mal_id: number
    name: string
}

export interface IInitialStateTitle{
    titles: ITitle | [],
    randomTitles: ITitle[],
    titleError: boolean,
    paginatedTitles: ITitle[] | [],
    lastTitlePage: number,
    isTitle: string | null,
    titleSearchResult: ITitle[] | [],
    searchTitleValue: string,
    titleGenres: IGenreData[],
    titleByGenre: ITitle[] | [],
    currentTitle: ITitle | null,
    currentTitlePage: number,
    popularTitle: ITitle[] | [],
    titleReviews: IReview[] | []
}

export interface ITitle{
    url: string
    title: string
    title_japanese?: string
    type: string
    score?: string | null
    scored?: string | null
    rank?: number | null
    synopsis: string | null
    images: IImages
    aired?: IAiredNPublished | null
    published?: IAiredNPublished | null
    genres: IGenre[],
    duration?: string,
    episodes?: number,
    chapters?: number,
    scored_by?: number,
    rating: string,
    status: string,
    mal_id: number
}

export interface IGenreData{
    count: number
    mal_id: number
    name: string
    url: string
}

export interface IScore{
    map: any;
    overall: number,
    story: number,
    art: number,
    character: number,
    enjoyment: number,
    sound?: number
}

export interface IReview{
    mal_id: number,
    episodes_watched?: number,
    chapters_read?: number,
    review: string,
    type: string,
    user: {
        username: string,
        images: IImages
    },
    scores: IScore,
    score: number
}