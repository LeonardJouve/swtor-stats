import Player from "../player";
import Stat from "./stat";

export default class CriticalMultiplier {
    private static BASE_CRITICAL_MULTIPLIER = 0.5;

    static calculate(player: Player): number {
        const {
            level,
            critical,
        } = player;
        const base = 1 - 0.01 / 0.3;
        const power = (critical / level) / 0.8;

        return 30 * (1 - Math.pow(base, power)) + this.BASE_CRITICAL_MULTIPLIER;
    }
}

CriticalMultiplier satisfies Stat;
