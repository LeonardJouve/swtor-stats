import Stat from "./stat";

export default class CriticalDamage extends Stat {
    private criticalMultiplier: Stat;
    private criticalChance: Stat;

    constructor(criticalMultiplier: Stat, criticalChance: Stat) {
        super();
        this.criticalMultiplier = criticalMultiplier;
        this.criticalChance = criticalChance;
    }

    get rating() {
        return 1 + this.criticalMultiplier.value * Math.max(1, this.criticalChance.value);
    }
}
