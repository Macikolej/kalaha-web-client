import React, { useState } from "react";

import { GameScreen } from "features/GameScreen";
import { MainScreen } from "features/MainScreen";

export const MainRouter = () => {
  const [game, setGame] = useState(null);
  return game ? <GameScreen /> : <MainScreen />;
};
