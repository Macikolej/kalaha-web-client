import React, { useState, useEffect } from "react";

import { GameScreen } from "features/GameScreen";
import { MainScreen } from "features/MainScreen";
import { apiPostSession } from "utils/api.js";

export const MainRouter = () => {
  const [game, setGame] = useState(null);
  const [playerId, setPlayerId] = useState("");

  useEffect(() => {
    if (!playerId) {
      apiPostSession()
        .then((res) => {
          setPlayerId(res.player_id);
        })
        .catch((err) => {
          console.log(err); // TODO: HANDLE ERRORS
        });
    }
  }, [playerId]);

  return game ? (
    <GameScreen game={game} playerId={playerId} />
  ) : playerId ? (
    <MainScreen setGame={setGame} playerId={playerId} />
  ) : (
    <></>
  );
};
