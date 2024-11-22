import { FC } from 'react';
import { Link } from 'react-router-dom';

import { getScoreColor } from '../../utils';
import { IGenre, ITitle } from '../../types/types';
import './Title.scss';

interface IPaginatedTitle {
  title?: ITitle;
}

export const Title: FC<IPaginatedTitle> = ({ title }) => {
  const score: any = title?.score || title?.scored;
  return (
    <Link
      className="titles-item"
      to={`/title/${title?.mal_id}`}
      key={title?.url}
      data-testid="title">
      <img
        className="title-poster"
        src={title?.images?.webp.image_url}
        alt={`${title?.title}-Poster`}
      />
      <div className="title-info">
        <p className="info">
          {title?.title} / {title?.title_japanese}
        </p>
        <p className="info">
          {title?.aired?.string || title?.published?.string}
        </p>
        <p className="info">{title?.type}</p>
        <div className="title-genres">
          {title?.genres?.map((genre: IGenre) => (
            <p className="genres-name" key={genre.mal_id}>
              {genre.name}
            </p>
          ))}
        </div>
        <p style={{ color: getScoreColor(score) }} className="info">
          Score : {title?.score || title?.scored}
        </p>
        <p className="info">Rank : {title?.rank}</p>
      </div>
    </Link>
  );
};
