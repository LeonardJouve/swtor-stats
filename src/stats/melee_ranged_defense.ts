import {diminishingReturn} from "../utils";
import Stat from "./stat";

export default class MeleeRangedDefence extends Stat {
    private defenseRating: Stat;

    constructor(defenseRating: Stat) {
        super();
        this.coefficient += 0.05;
        this.defenseRating = defenseRating;
    }

    get rating(): number {
        return diminishingReturn(this.defenseRating.value, 0.3, 5);
    }
}
