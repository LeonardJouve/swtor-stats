import {diminishingReturn} from "../utils";
import Stat from "./stat";

export default class Alacrity extends Stat {
    private alacrityRating: Stat;

    constructor(alacrityRating: Stat) {
        super();
        this.alacrityRating = alacrityRating;
    }

    get rating() {
        return diminishingReturn(this.alacrityRating.value, 0.3, 3.2);
    }
}
