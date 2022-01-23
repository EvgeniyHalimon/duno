import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchRandomAnime } from "../store/actions/anime-action-creators";
import { useTypesSelector } from '../hooks/useTypesSelector';

export const SliderInfo: React.FC = () => {
    const dispatch = useDispatch()
    const {randomAnimes} = useTypesSelector(state => state.anime)

    useEffect(() => {
        dispatch(fetchRandomAnime())
    },[])

    return(
        <div>
            {randomAnimes && randomAnimes.map((titles: any) => 
            <div
                className="slide"
                key={titles.url}
            >
                <div>
                    <div className="slide-item" key={titles.url}>
                        <img className="slide-poster" src={titles.images.webp.image_url} alt="poster" />
                        <div>
                            <div>
                                <p>{titles.title} / {titles.title_japanese}</p>
                                <p>{titles.aired.string}</p>
                                <p>Score: {titles.score}</p>
                                <p>Rank: {titles.rank}</p>
                                <div className="slide-genres">
                                    {titles.genres.map((genre: any) => <p className="slide-name" key={genre.mal_id}>{genre.name}</p>
                                    )}
                                </div>
                            </div>
                            <p className="slider-synopsis">
                                {titles.synopsis}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}