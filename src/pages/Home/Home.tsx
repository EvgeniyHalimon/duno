import { useEffect } from 'react';

import { Head } from '../../components/Head/Head';
import { RandomTitlesContainer } from '../../components/RandomPaginatedTitles/RandomTitlesContainer';
import { Titles } from '../../components/Titles/Titles';
import { getFromStorage, setToStorage } from '../../utils';
import { useTypedSelector } from '../../hooks';
import './Home.scss';

export const Home = () => {
  if (getFromStorage('topic') === null) {
    setToStorage('topic', 'anime');
  }

  const { isTitle } = useTypedSelector((state) => state.title);

  useEffect(() => {}, [isTitle]);

  return (
    <div className="home-wrapper">
      <Head />
      <RandomTitlesContainer />
      <Titles />
    </div>
  );
};
