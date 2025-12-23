import Absorb from "./stats/absorb";
import Accuracy from "./stats/accuracy";
import Alacrity from "./stats/alacrity";
import BonusDamage from "./stats/bonus_damage";
import BonusHealing from "./stats/bonus_healing";
import CastTime from "./stats/cast_time";
import CriticalChance from "./stats/critical_chance";
import CriticalDamage from "./stats/critical_damage";
import CriticalMultiplier from "./stats/critical_multiplier";
import GCD from "./stats/gcd";
import Health from "./stats/health";
import MeleeRangedDefence from "./stats/melee_ranged_defense";
import Stat from "./stats/stat";
import Shield from "./stats/shield";

type Ratings = {
    absorb?: number;
    accuracy?: number;
    alacrity?: number;
    critical?: number;
    defense?: number;
    endurance?: number;
    mastery?: number;
    power?: number;
    shield?: number;
};

export default class Player {
    constructor({
        absorb = 0,
        accuracy = 0,
        alacrity = 0,
        critical = 0,
        defense = 0,
        endurance = 0,
        mastery = 0,
        power = 0,
        shield = 0,
    }: Ratings = {}) {
        this.absorbRating.rating = absorb;
        this.accuracyRating.rating = accuracy;
        this.alacrityRating.rating = alacrity;
        this.criticalRating.rating = critical;
        this.defenseRating.rating = defense;
        this.enduranceRating.rating = endurance;
        this.masteryRating.rating = mastery;
        this.powerRating.rating = power;
        this.shieldRating.rating = shield;
    }

    public absorbRating = new Stat();
    public accuracyRating = new Stat();
    public alacrityRating = new Stat();
    public criticalRating = new Stat();
    public defenseRating = new Stat();
    public enduranceRating = new Stat();
    public masteryRating = new Stat();
    public powerRating = new Stat();
    public shieldRating = new Stat();

    public absorb = new Absorb(this.absorbRating);
    public accuracy = new Accuracy(this.accuracyRating);
    public alacrity = new Alacrity(this.alacrityRating);
    public bonusDamage = new BonusDamage(this.masteryRating, this.powerRating);
    public bonusHealing = new BonusHealing(this.masteryRating, this.powerRating);
    public castTime = new CastTime(this.alacrity);
    public criticalChance = new CriticalChance(this.masteryRating, this.criticalRating);
    public criticalMultiplier = new CriticalMultiplier(this.criticalRating);
    public criticalDamage = new CriticalDamage(this.criticalMultiplier, this.criticalChance);
    public gcd = new GCD(this.alacrity);
    public health = new Health(this.enduranceRating);
    public meleeRangedDefense = new MeleeRangedDefence(this.defenseRating);
    public shield = new Shield(this.shieldRating);
}
