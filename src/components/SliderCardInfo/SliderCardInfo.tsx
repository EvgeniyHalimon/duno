import { FC } from 'react';
import { Link } from "react-router-dom";

import { getScoreColor } from "../../utils/getColor";
import { ITitle } from "../../types/types";
import './SliderCardInfo.scss'

interface ISliderInfo {
  title: ITitle;
}

const GOLD_MEDAL = <span>&#129351;</span>;
const SILVER_MEDAL = <span>&#129352;</span>;
const BRONZE_MEDAL = <span>&#129353;</span>;

export const SliderCardInfo: FC<ISliderInfo> = ({ title }) => {
  const {
    mal_id,
    title: titleName,
    title_japanese,
    type,
    aired,
    published,
    images,
    score,
    rank,
    genres,
    synopsis,
  } = title;

  return (
    <Link to={`/title/${mal_id}`}>
      <div className="slide" data-testid="slide">
        <div className="slide-item">
          <img className="slide-poster" src={images?.webp.image_url} alt={`${titleName}-poster`} />
          <div className="slide-info">
            <p className="info">{titleName} / {title_japanese}</p>
            <p className="info">{type}</p>
            <p className="info">{aired?.string || published?.string}</p>
            <p style={{ color: getScoreColor(score) }} className="info">Score: {score}</p>
            <p className="info">Rank: {rank === 1 ? GOLD_MEDAL : rank === 2 ? SILVER_MEDAL : rank === 3 ? BRONZE_MEDAL : rank}</p>
            <div className="slide-genres">
              {genres.map((genre) => <p className="slide-name" key={genre.mal_id}>{genre.name}</p>)}
            </div>
            <p className="slide-synopsis info">
              {synopsis?.slice(0, 750)}
              <Link to={`/title/${mal_id}`} className="slide-synopsis-link">...show more</Link>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

