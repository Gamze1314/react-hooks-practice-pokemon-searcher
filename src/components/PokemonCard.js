import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [ frontSprite, setFrontSprite ] = useState(true)
  const {
    name,
    hp,
    sprites: { front, back },
  } = pokemon; 

  function toggleSprites() {
    setFrontSprite(!frontSprite)
  }


  return (
    <Card>
      <div>
        <div onClick={toggleSprites} className="image">
          <img src={frontSprite ? front : back} alt="oh no!" />
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
