import Player from "../player";
import Stat from "./stat";

export default class MeleeRangedDefence {
    private static BASE_MELEE_RANGED_DEFENCE = 0.05;

    // For level 80
    private static divisor = 5;

    static calculate(player: Player): number {
        const {
            defense,
            level,
            meleeRangedDefenceIncrease,
        } = player;
        const base = 1 - 0.01 / 0.3;
        const power = (defense / level) / MeleeRangedDefence.divisor;

        return (0.3 * (1 - Math.pow(base, power))) + meleeRangedDefenceIncrease + this.BASE_MELEE_RANGED_DEFENCE;
    }
}

MeleeRangedDefence satisfies Stat;
