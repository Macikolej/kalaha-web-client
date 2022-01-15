import React, { useState } from "react";

import styles from "./styles.module.scss";
import { MenuButton } from "shared/components/MenuButton";
import { apiPostCreate, apiPostSearch, apiPostJoin } from "utils/api";

export const MainScreen = ({ playerId, setGame }) => {
  const [gameToJoinId, setGameToJoinId] = useState("");

  const onCreate = () => {
    console.log(playerId);
    apiPostCreate(playerId)
      .then((res) => {
        setGame(res.game);
      })
      .catch((err) => {
        console.log(err); // TODO: HANDLE ERRORS
      });
  };

  const onSearch = () => {
    apiPostSearch(playerId)
      .then((res) => {
        setGame(res.game);
      })
      .catch((err) => {
        console.log(err); // TODO: HANDLE ERRORS
      });
  };

  const onJoin = () => {
    if (gameToJoinId) {
      apiPostJoin(playerId, gameToJoinId)
        .then((res) => {
          console.log(res);
          setGame(res.game);
        })
        .catch((err) => {
          console.log(err); // TODO: HANDLE ERRORS
        });
    }
  };

  return (
    <div className={styles.cMainScreen}>
      <div className={styles.menu}>
        <div className={styles.title}>kalaha</div>
        <div className={styles.buttonContainer}>
          <div className={styles.joinContainer}>
            <MenuButton onClick={onJoin} caption="Join specific game" />
            <input
              className={styles.joinInput}
              value={gameToJoinId}
              onChange={(e) => {
                setGameToJoinId(e.target.value);
              }}
            />
          </div>
          <MenuButton onClick={onSearch} caption="Join random game" />
          <MenuButton onClick={onCreate} caption="Create game" />
        </div>
      </div>
    </div>
  );
};
