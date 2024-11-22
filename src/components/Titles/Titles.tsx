import { useEffect } from 'react';
import { Pagination } from '@mui/material';

import { PaginatedTitles } from '../PaginatedTitles/PaginatedTitles';
import { useAppDispatch, useTypedSelector } from '../../hooks';
import {
  fetchPaginatedTitles,
  setCurrentTitlePage,
} from '../../store/actions/title-action-creators';
import { getFromStorage } from '../../utils/storage';

export const Titles = () => {
  const dispatch = useAppDispatch();
  const { paginatedTitles, lastTitlePage, currentTitlePage, isTitle } =
    useTypedSelector((state) => state.title);

  const topic = getFromStorage('topic');

  useEffect(() => {
    dispatch(fetchPaginatedTitles(currentTitlePage));
  }, [currentTitlePage, topic, isTitle]);

  return (
    <>
      <PaginatedTitles paginatedTitles={paginatedTitles} />
      <Pagination
        count={lastTitlePage}
        defaultPage={1}
        color="primary"
        onChange={(e, value) => dispatch(setCurrentTitlePage(value))}
        data-testid="pagination"
      />
    </>
  );
};
