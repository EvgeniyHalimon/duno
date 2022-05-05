import { Link } from "react-router-dom";

import { IGenre, ITitle } from "../../types/types";

import { getScoreColor } from "../../utils/getColor";

import './SliderCardInfo.scss'

interface ISliderInfo{
    title: ITitle
}

export const SliderCardInfo: React.FC<ISliderInfo> = ({title}) => {

    const score: any = title.score || title.scored

    const getPlaceEmoji = (rank: any) => {
        if(rank === 1) return <span>&#129351;</span>
        if(rank === 2) return <span>&#129352;</span>
        if(rank === 3) return <span>&#129353;</span>
        return rank
    }

    console.log(typeof title.rank, title.rank);
    
    return(
        <Link to={`/title/${title?.mal_id}`}>
            <div className="slide">
                <div className="slide-item">
                    <img className="slide-poster" src={title.images?.webp.image_url} alt={`${title.title}-poster`} />
                    <div className="slide-info">
                        <p className="info">{title.title} / {title.title_japanese}</p>
                        <p className="info">{title.type}</p>
                        <p className="info">{title.aired?.string || title.published?.string}</p>
                        <p
                            style={{color: getScoreColor(score)}} className="info"
                        >Score: {score}</p>
                        <p className="info">Rank: {getPlaceEmoji(title.rank)}</p>
                        <div className="slide-genres">
                            {title.genres?.map((genre: IGenre) => <p className="slide-name" key={genre.mal_id}>{genre.name}</p>)}
                        </div>
                        <p className="slide-synopsis info">
                            {title.synopsis?.slice(0, 750)}
                            <Link to={`/title/${title?.mal_id}`} className="slide-synopsis-link">...show more</Link>
                        </p>
                    </div>
                </div>
            </div>
        </Link >
    )
}