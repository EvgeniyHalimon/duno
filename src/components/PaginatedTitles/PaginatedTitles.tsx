import { FC } from 'react';
import { Title } from '../Title/Title';
import { ITitle } from '../../types/types';
import SkeletonTitle from '../SkeletonTitle/SkeletonTitle';
import './PaginatedTitles.scss';

interface IPaginatedTitles {
  paginatedTitles: ITitle[];
}

export const PaginatedTitles: FC<IPaginatedTitles> = ({ paginatedTitles }) => {
  return (
    <div className="titles-section">
      <div className="titles-list">
        {paginatedTitles.length > 0 ? (
          paginatedTitles.map((title: ITitle) => <Title title={title} key={title?.url} />)
        ) : (
          Array.from({ length: 5 }, (_, index) => <SkeletonTitle key={index} />)
        )}
      </div>
    </div>
  );
};
