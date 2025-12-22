import Player from "../player";
import Stat from "./stat";

export default class CriticalChance {
    private static BASE_CRITICAL_CHANCE = 0.05;

    // For level 80
    private static masteryDivisor = 12.93;
    private static criticalDivisor = 2.41;

    private static fromMastery(player: Player): number {
        const {
            mastery,
            level,
        } = player;
        const base = 1 - 0.01 / 0.2;
        const power = (mastery / level) / CriticalChance.masteryDivisor;

        return 0.2 * (1 - (Math.pow(base, power)));
    }

    private static fromCritical(player: Player): number {
        const {
            level,
            critical,
        } = player;
        const base = 1 - 0.01 / 0.3;
        const power = (critical / level) / CriticalChance.criticalDivisor;

        return 0.3 * (1 - Math.pow(base, power));
    }

    static calculate(player: Player): number {
        return this.fromMastery(player) + this.fromCritical(player) + this.BASE_CRITICAL_CHANCE;
    }
}

CriticalChance satisfies Stat;
