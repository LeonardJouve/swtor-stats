import Player from "../player";
import Stat from "./stat";

export default class Absorb {
    // For level 80
    private static divisor = 2.189;

    static calculate(player: Player): number {
        const {
            absorb,
            level,
            absorbIncrease,
        } = player;
        const base = 1 - 0.01 / 0.5;
        const power = (absorb / level) / Absorb.divisor;

        return 0.5 * (1 - Math.pow(base, power)) + absorbIncrease;
    }
}

Absorb satisfies Stat;
