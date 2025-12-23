import {diminishingReturn} from "../utils";
import Stat from "./stat";

export default class Shield extends Stat {
    private shieldRating: Stat;

    constructor(shieldRating: Stat) {
        super();
        this.shieldRating = shieldRating;
    }

    get rating() {
        return diminishingReturn(this.shieldRating.value, 0.5, 2.079);
    }
}
