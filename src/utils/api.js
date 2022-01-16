import ky from "ky";

const apiClient = ky.create({
  prefixUrl: "http://localhost:3001",
});

export const apiPostGame = (playerId, gameId) =>
  apiClient
    .post("game", { json: { player_id: playerId, game_id: gameId } })
    .json();

export const apiDeleteGame = (playerId, gameId) =>
  apiClient
    .delete("game", { json: { player_id: playerId, game_id: gameId } })
    .json();

export const apiPostSession = () => apiClient.post("session").json();

export const apiPostStart = (playerId, gameId) =>
  apiClient
    .post("start", { json: { player_id: playerId, game_id: gameId } })
    .json();

export const apiPostSearch = (playerId) =>
  apiClient.post("search", { json: { player_id: playerId } }).json();

export const apiPostCreate = (playerId) =>
  apiClient.post("create", { json: { player_id: playerId } }).json();

export const apiPostJoin = (playerId, gameId) =>
  apiClient
    .post("join", { json: { player_id: playerId, game_id: gameId } })
    .json();

export const apiPostMove = (move, playerId, gameId) =>
  apiClient
    .post("move", {
      json: { move: move, player_id: playerId, game_id: gameId },
    })
    .json();
