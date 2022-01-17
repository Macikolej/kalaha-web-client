import React, { useEffect, useState } from "react";
import cn from "classnames";

import {
  apiDeleteGame,
  apiPostGame,
  apiPostStart,
  apiPostMove,
} from "utils/api";
import { MenuButton } from "shared/components/MenuButton";
import { Hole } from "shared/components/Hole";
import styles from "./styles.module.scss";

export const GameScreen = ({ game, playerId, setGame }) => {
  const [stateInterval, setStateInterval] = useState(null);
  const playerHoles = game.state.player_holes;
  const enemyHoles = game.state.enemy_holes;

  const onLeave = () => {
    clearInterval(stateInterval);
    apiDeleteGame(playerId, game.game_id)
      .then((res) => {
        if (res.game) {
          setGame(res.game);
        } else {
          setGame(null);
        }
        localStorage.removeItem("game");
      })
      .catch((err) => {
        console.log(err); // TODO: HANDLE ERRORS
      });
  };

  const onStart = () => {
    if (Object.keys(game.players).length === 2) {
      apiPostStart(playerId, game.game_id)
        .then((res) => {
          if (res.game) {
            setGame(res.game);
          } else {
            setGame(null);
          }
          localStorage.setItem("game", JSON.stringify(res.game));
        })
        .catch((err) => {
          console.log(err); // TODO: HANDLE ERRORS
        });
    }
  };

  const onMove = (move) => {
    if (game.in_progress && playerHoles[move]) {
      apiPostMove(move, playerId, game.game_id)
        .then((res) => {
          if (res.game) {
            setGame(res.game);
          } else {
            setGame(null);
          }
          localStorage.setItem("game", JSON.stringify(res.game));
        })
        .catch((err) => {
          console.log(err); // TODO: HANDLE ERRORS
        });
    }
  };

  const getGame = () => {
    apiPostGame(playerId, game.game_id)
      .then((res) => {
        if (res.game) {
          setGame(res.game);
        } else {
          setGame(null);
        }
        localStorage.setItem("game", JSON.stringify(res.game));
      })
      .catch((err) => {
        console.log(err); // TODO: HANDLE ERRORS
      });
  };

  useEffect(() => {
    getGame();
    const interval = setInterval(getGame, 1000);
    setStateInterval(interval);
  }, []);

  return (
    <div className={styles.cGameScreen}>
      <div className={styles.sidebar}>
        <div className={styles.playerCounter}>{`Players: ${
          Object.keys(game.players).length
        }/2`}</div>
        {!game.in_progress && (
          <MenuButton caption="Start game" onClick={onStart} />
        )}
        <MenuButton caption="Leave game" onClick={onLeave} />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.infoText}>Game id: {game.game_id}</div>
        {game.result && (
          <div
            className={cn(styles.infoText, {
              [styles.losingText]: game.result !== "draw",
              [styles.winningText]: game.result === playerId,
            })}
          >
            {game.result === "draw"
              ? "It's a draw!"
              : game.result === playerId
              ? "You won!"
              : "You lost!"}
          </div>
        )}
        <div
          className={cn(styles.gameBoard, {
            [styles.gameBoardOnMove]: game.moves_next === playerId,
          })}
        >
          <Hole type="home" count={enemyHoles[enemyHoles.length - 1]} />
          {playerHoles.map((value, i) => {
            if (i < playerHoles.length - 1) {
              return (
                <div className={styles.column} key={i}>
                  <Hole
                    type="normal"
                    count={enemyHoles[enemyHoles.length - 2 - i]}
                  />
                  <Hole
                    type="normal"
                    className={styles.playerHole}
                    count={playerHoles[i]}
                    onClick={() => onMove(i)}
                  />
                </div>
              );
            }
            return <div key={i}></div>;
          })}
          <Hole type="home" count={playerHoles[playerHoles.length - 1]} />
        </div>
      </div>
    </div>
  );
};
