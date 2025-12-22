import Rating from "./rating";

export default class CriticalDamage extends Rating {
    private criticalMultiplier: Rating;
    private criticalChance: Rating;

    constructor(criticalMultiplier: Rating, criticalChance: Rating) {
        super();
        this.criticalMultiplier = criticalMultiplier;
        this.criticalChance = criticalChance;
    }

    get rating() {
        return 1 + this.criticalMultiplier.value * Math.max(1, this.criticalChance.value);
    }
}
