import Player from "./player";
import Rating from "./stats/rating";

const player = new Player({
    alacrity: 2_054,
    accuracy: 2_694,
});

Object.entries(player).forEach(([key, rating]) => console.log(key + ": " + (rating as Rating).value));
