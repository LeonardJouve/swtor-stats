import Player from "../player";
import Stat from "./stat";

export default class CriticalMultiplier {
    private static BASE_CRITICAL_MULTIPLIER = 0.5;

    // For level 80
    private static divisor = 2.41;

    static calculate(player: Player): number {
        const {
            level,
            critical,
        } = player;
        const base = 1 - 0.01 / 0.3;
        const power = (critical / level) / CriticalMultiplier.divisor;

        return 0.3 * (1 - Math.pow(base, power)) + this.BASE_CRITICAL_MULTIPLIER;
    }
}

CriticalMultiplier satisfies Stat;
