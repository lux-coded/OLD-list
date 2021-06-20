import React from 'react';
import List from './components/List/List';

const App = () => {
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

  return (
    <main style={{ textAlign: 'center' }}>
      <h1>ARTISTS</h1>
      <List listData={listData}/>
    </main>
  );
}

export default App;
