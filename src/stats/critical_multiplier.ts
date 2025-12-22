import {diminishingReturn} from "../utils";
import Rating from "./rating";

export default class CriticalMultiplier extends Rating {
    private criticalRating: Rating;

    constructor(criticalRating: Rating) {
        super();
        this.coefficient += 0.5;
        this.criticalRating = criticalRating;
    }

    get rating() {
        return diminishingReturn(this.criticalRating.value, 0.3, 2.41);
    }
}
