import {diminishingReturn} from "../utils";
import Stat from "./stat";

export default class CriticalMultiplier extends Stat {
    private criticalRating: Stat;

    constructor(criticalRating: Stat) {
        super();
        this.coefficient += 0.5;
        this.criticalRating = criticalRating;
    }

    get rating() {
        return diminishingReturn(this.criticalRating.value, 0.3, 2.41);
    }
}
