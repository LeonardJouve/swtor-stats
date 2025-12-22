import {diminishingReturn} from "../utils";
import Rating from "./rating";

export default class MeleeRangedDefence extends Rating {
    private defenseRating: Rating;

    constructor(defenseRating: Rating) {
        super();
        this.coefficient += 0.05;
        this.defenseRating = defenseRating;
    }

    get rating(): number {
        return diminishingReturn(this.defenseRating.value, 0.3, 5);
    }
}
