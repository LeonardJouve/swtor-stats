import Player from "./player";
import Stat from "./stats/stat";
import Timeline from "./timeline/timeline";

const player = new Player({
    alacrity: 2_054,
    accuracy: 2_694,
});

Object.entries(player).forEach(([key, rating]) => console.log(key + ": " + (rating as Stat).value));

const timeline = new Timeline(player);

for (let i = 0; i < 10; ++i) {
    timeline.nextEvent();
}
