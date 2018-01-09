import React from 'react';

export const Game = () => (
  <div className="game col">
    <div className="game card text-left" style={{ marginBottom: 20 }}>
      <img
        className="card-img-top"
        src="https://i.ebayimg.com/thumbs/images/g/5F0AAOSwfkxZcDHZ/s-l225.jpg" />
      <div className="card-block">
        <h4 className="card-title">The Witcher 3: Wildhunt</h4>
        <p className="card-text">Action, Adventure</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Purchased 3 mins ago</small>
      </div>
    </div>
  </div>
);

export default Game;
