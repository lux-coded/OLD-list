import React, { useState } from 'react';

import ListItem from './ListItem/ListItem';
import './List.scss';

const List = () => {
  const [ pageState, setPageState ] = useState(0);
  const [ changedRating, setChangedRating ] = useState(false);

  const listData = [
    { name: 'Eminem', id: 1, rating: 0 },
    { name: '2Pac', id: 2, rating: 0 },
    { name: 'Sabaton', id: 3, rating: 0 },
    { name: 'Ghost', id: 4, rating: 0 },
    { name: 'Disturbed', id: 5, rating: 0 },
    { name: 'Powerwolf', id: 6, rating: 0 },
    { name: 'Guns N\' Roses', id: 7, rating: 0 },
    { name: 'Depeche Mode', id: 8, rating: 0 },
    { name: 'Michael Jackson', id: 9, rating: 0 },
    { name: 'Phil Collins', id: 10, rating: 0 },
    { name: 'Metallica', id: 11, rating: 0 },
    { name: 'System of a Down', id: 12, rating: 0 },
    { name: 'Hollywood Undead', id: 13, rating: 0 },
    { name: 'Linkin Park', id: 14, rating: 0 },
    { name: 'Alestorm', id: 15, rating: 0 },
  ];

  const renderListSet = (page) => {
    let pagePoint = page * 5;

    return listData.slice(pagePoint, pagePoint + 5).map((artist) => {
      return (
        <ListItem page={pageState} artist={artist}/>
      );
    });
  }

  return (
    <section>
      <button disabled={pageState === 0} onClick={() => setPageState(pageState - 1)} >
        Previous set
      </button>
      <button disabled={pageState === 2}  onClick={() => setPageState(pageState + 1)} >
        Next set
      </button>
      {
        renderListSet(pageState)
      }
    </section>
  );
}

export default List;
