import React, { useState } from 'react';

import ListItem from './ListItem/ListItem';
import './List.scss';

const List = ({ listData }) => {
  const [ pageState, setPageState ] = useState(0);

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
