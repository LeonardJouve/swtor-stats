import Player from "../player";
import Stat from "./stat";

export default class CriticalChance {
    private static BASE_CRITICAL_CHANCE = 0.05;

    private static fromMastery(player: Player): number {
        const {
            mastery,
            level,
        } = player;
        const base = 1 - 0.01 / 0.2;
        const power = (mastery / level) / 5.5;

        return 20 * (1 - (Math.pow(base, power)));
    }

    private static fromCritical(player: Player): number {
        const {
            level,
            critical,
        } = player;
        const base = 1 - 0.01 / 0.3;
        const power = (critical / level) / 0.8;

        return 30 * (1 - Math.pow(base, power));
    }

    static calculate(player: Player): number {
        return this.fromMastery(player) + this.fromCritical(player) + this.BASE_CRITICAL_CHANCE;
    }
}

CriticalChance satisfies Stat;
