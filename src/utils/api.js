import ky from "ky";

const apiClient = ky.create({
  prefixUrl: "http://localhost:3001",
});

export const apiGetGame = (gameId) =>
  apiClient.get("game", { json: { game_id: gameId } }).json();

export const apiPostSession = () => apiClient.post("session").json();

export const apiPostStart = (gameId) =>
  apiClient.post("start", { json: { game_id: gameId } }).json();

export const apiPostSearch = (playerId) =>
  apiClient.post("search", { json: { player_id: playerId } }).json();

export const apiPostCreate = (playerId) =>
  apiClient.post("create", { json: { player_id: playerId } }).json();

export const apiPostJoin = (playerId, gameId) =>
  apiClient
    .post("join", { json: { player_id: playerId, game_id: gameId } })
    .json();
