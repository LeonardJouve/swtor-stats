import Player from "../player";
import Stat from "./stat";
import {diminishingReturn} from "../utils";

export default class MeleeRangedDefence {
    private static BASE_MELEE_RANGED_DEFENCE = 0.05;

    static calculate({defense, meleeRangedDefenceIncrease, level}: Player): number {
        return diminishingReturn(level, defense, 0.3, 5) + meleeRangedDefenceIncrease + this.BASE_MELEE_RANGED_DEFENCE;
    }
}

MeleeRangedDefence satisfies Stat;
