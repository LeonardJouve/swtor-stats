import Player from "../player";
import CriticalChance from "./critical_chance";
import CriticalMultiplier from "./critical_multiplier";
import Stat from "./stat";

export default class CriticalDamage {
    static calculate(player: Player): number {
        const criticalChance = CriticalChance.calculate(player);
        const criticalMultiplier = CriticalMultiplier.calculate(player);

        return 1 + criticalMultiplier * Math.max(1, criticalChance);
    }
}

CriticalDamage satisfies Stat;
