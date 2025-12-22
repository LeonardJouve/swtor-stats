import Player from "../player";
import Stat from "./stat";
import {diminishingReturn} from "../utils";

export default class CriticalMultiplier {
    private static BASE_CRITICAL_MULTIPLIER = 0.5;

    static calculate({level, critical}: Player): number {
        return diminishingReturn(level, critical, 0.3, 2.41) + CriticalMultiplier.BASE_CRITICAL_MULTIPLIER;
    }
}

CriticalMultiplier satisfies Stat;
