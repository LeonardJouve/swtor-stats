import {diminishingReturn} from "../utils";
import Stat from "./stat";

export default class CriticalChance extends Stat {
    private masteryRating: Stat;
    private criticalRating: Stat;

    constructor(masteryRating: Stat, criticalRating: Stat) {
        super();
        this.initial += 0.05;
        this.masteryRating = masteryRating;
        this.criticalRating = criticalRating;
    }

    get rating() {
        const mastery = diminishingReturn(this.masteryRating.value, 0.2, 12.93);
        const critical = diminishingReturn(this.criticalRating.value, 0.3, 2.41);
        return mastery + critical;
    }
}
