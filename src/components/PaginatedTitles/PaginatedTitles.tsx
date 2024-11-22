import { FC } from 'react';

import { SkeletonTitle, Title } from '..';
import { ITitle } from '../../types/types';
import './PaginatedTitles.scss';

interface IPaginatedTitles {
  paginatedTitles: ITitle[];
}

export const PaginatedTitles: FC<IPaginatedTitles> = ({ paginatedTitles }) => {
  return (
    <div className="titles-section" data-testid="paginated-titles">
      <div className="titles-list">
        {paginatedTitles.length > 0
          ? paginatedTitles.map((title: ITitle) => (
              <Title title={title} key={title?.url} />
            ))
          : Array.from({ length: 5 }, (_, index) => (
              <SkeletonTitle key={index} />
            ))}
      </div>
    </div>
  );
};
