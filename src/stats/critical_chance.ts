import {diminishingReturn} from "../utils";
import Rating from "./rating";

export default class CriticalChance extends Rating {
    private masteryRating: Rating;
    private criticalRating: Rating;

    constructor(masteryRating: Rating, criticalRating: Rating) {
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
