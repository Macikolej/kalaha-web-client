import ky from "ky";

const apiClient = ky.create({
  prefixUrl: "localhost:3001",
});

export const apiGetGame = (gameId) =>
  apiClient.get("game", { json: { game_id: gameId } }).json();

export const apiPostStart = (gameId) =>
  apiClient.post("start", { json: { game_id: gameId } }).json();

export const apiPostSearch = (playerId) =>
  apiClient.post("search", { json: { player_id: playerId } }).json();

export const apiPostCreate = (playerId) =>
  apiClient.post("create", { json: { player_id: playerId } }).json();