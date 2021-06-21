import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';

const ListItem = ({ artist, page }) => {
  const [ ratingValue, setRatingValue ] = useState(artist.rating);
  const [ clicked, setClicked ] = useState(false);



  useEffect(() => {
    setClicked(false);
  }, [page]);

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
