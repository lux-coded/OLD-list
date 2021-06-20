import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';

import ListItem from './ListItem/ListItem';
import './List.scss';

const List = ({ listData }) => {
  const [ listState, setListState ] = useState(false);
  // const [ ratingValue, setRatingValue ] = useState(0);

  const renderList = () => {
    return listData.map((artist) => {
      return (
        <ListItem artist={artist}/>
      );
    });
  }

  return (
    <section>
      <button
        onClick={() =>
          setListState(!listState)}>{listState ? 'Show Less' : 'Show More'
        }
      </button>
      {
        listState ?
          renderList().slice()
        :
          renderList().slice(0, 5)
      }
    </section>
  );
}

export default List;
