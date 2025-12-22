import Player from "../player";
import Stat from "./stat";

export default class Alacrity {
    // For level 80
    private static divisor = 3.2;

    static calculate(player: Player): number {
        const {
            alacrity,
            level,
        } = player;
        const base = 1 - 0.01 / 0.3;
        const power = (alacrity / level) / Alacrity.divisor;

        return 0.3 * (1 - Math.pow(base, power));
    }
}

Alacrity satisfies Stat;
