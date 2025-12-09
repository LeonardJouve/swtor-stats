import Player from "../player";
import Stat from "./stat";

export default class MeleeRangedDefence {
    private static BASE_MELEE_RANGED_DEFENCE = 0.05;

    static calculate(player: Player): number {
        const {
            defence,
            level,
            meleeRangedDefenceIncrease,
        } = player;
        const base = 1 - 0.01 / 0.3;
        const power = (defence / level) / 1.2;

        return (30 * (1 - Math.pow(base, power))) + meleeRangedDefenceIncrease + this.BASE_MELEE_RANGED_DEFENCE;
    }
}

MeleeRangedDefence satisfies Stat;
