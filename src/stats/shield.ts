import Player from "../player";
import Stat from "./stat";

export default class Shield {
    // For level 80
    private static divisor = 2.079;

    static calculate(player: Player): number {
        const {
            shield,
            level,
            shieldIncrease,
        } = player;
        const base = 1 - 0.01 / 0.5;
        const power = (shield / level) / Shield.divisor;

        return 0.5 * (1 - Math.pow(base, power)) + shieldIncrease;
    }
}

Shield satisfies Stat;
