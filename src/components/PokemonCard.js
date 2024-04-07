import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [isClicked, setIsClicked] = useState(false);

  const {
    name,
    hp,
    sprites: { front, back },
  } = pokemon;

  function handleClick() {
    // setState to toggle between front and back
    setIsClicked(!isClicked);
  }

  return (
    <Card>
      <div>
        <div onClick={handleClick} className="image">
          <img src={isClicked ? front : back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
