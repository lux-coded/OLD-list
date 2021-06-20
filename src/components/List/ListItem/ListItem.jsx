import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';

const ListItem = ({ artist }) => {
  const [ ratingValue, setRatingValue ] = useState(0);
  const [ clicked, setClicked ] = useState(false);

  return (
    <article key={artist.id}>
      {artist.name}
      <div className='star-rating'>
        <Rating
          name={`simple-controlled${artist.id}`}
          value={ratingValue}
          onChange={(event, newValue) => setRatingValue(newValue)}
          onClick={() => setClicked(true)}
          readOnly={clicked}
        />
      </div>
    </article>
  );
}

export default ListItem;
