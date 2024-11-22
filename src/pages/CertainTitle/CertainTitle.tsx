import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CurrentTitle } from '../../components/CurrentTitle/CurrentTitle';
import { fetchCurrentTitle } from '../../store/actions/title-action-creators';

import { getFromStorage } from '../../utils/storage';
import { Loading } from '../../components/Loading/Loading';
import { useAppDispatch, useTypedSelector } from '../../hooks';

export const CertainTitle = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const { currentTitle } = useTypedSelector((state) => state.title);

  const topic = getFromStorage('topic');

  useEffect(() => {
    dispatch(fetchCurrentTitle(id));
  }, [topic, id]);

  if (!currentTitle) {
    return <Loading />;
  }

  return <CurrentTitle title={currentTitle} />;
};
