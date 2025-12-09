import Player from "../player";
import Stat from "./stat";

export default class Alacrity {
    static calculate(player: Player): number {
        const {
            alacrity,
            level,
        } = player;
        const base = 1 - 0.01 / 0.3;
        const power = (alacrity / level) / 1.25;

        return 30 * (1 - Math.pow(base, power));
    }
}

Alacrity satisfies Stat;
