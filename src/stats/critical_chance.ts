import Player from "../player";
import Stat from "./stat";
import {diminishingReturn} from "../utils";

export default class CriticalChance {
    private static BASE_CRITICAL_CHANCE = 0.05;

    private static fromMastery({mastery, level}: Player): number {
        return diminishingReturn(level, mastery, 0.2, 12.93);
    }

    private static fromCritical({critical, level}: Player): number {
        return diminishingReturn(level, critical, 0.3, 2.41);
    }

    static calculate(player: Player): number {
        return this.fromMastery(player) + this.fromCritical(player) + this.BASE_CRITICAL_CHANCE;
    }
}

CriticalChance satisfies Stat;
