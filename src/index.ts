import Player from "./player";
import Stat from "./stats/stat";
import Health from "./stats/health";
import BonusDamage from "./stats/bonus_damage";
import BonusHealing from "./stats/bonus_healing";
import CriticalChance from "./stats/critical_chance";
import CriticalDamage from "./stats/critical_damage";
import CriticalMultiplier from "./stats/critical_multiplier";
import MeleeRangedDefence from "./stats/melee_ranged_defense";
import Alacrity from "./stats/alacrity";
import GCD from "./stats/gcd";
import CastTime from "./stats/cast_time";
import Accuracy from "./stats/accuracy";
import Shield from "./stats/shield";
import Absorb from "./stats/absorb";

const player = new Player();
const stats: Stat[] = [
    BonusDamage,
    BonusHealing,
    CriticalChance,
    CriticalDamage,
    CriticalMultiplier,
    Health,
    MeleeRangedDefence,
    Alacrity,
    GCD,
    CastTime,
    Accuracy,
    Shield,
    Absorb,
];

stats
    .map((stat) => stat.calculate(player))
    .forEach((stat) => console.log(stat));
