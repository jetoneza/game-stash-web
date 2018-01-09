import React from 'react';
import Game from './Game';

export const GamesList = () => {
  const games = [];

  let count = 0;

  while (count < 15) {
    games.push(<Game key={ count } />);
    count++;
  }

  return (
    <div className="class-list container">
      <div className="row">
        { games }
      </div>
    </div>
  );
};

export default GamesList;
