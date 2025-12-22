import {diminishingReturn} from "../utils";
import Rating from "./rating";

export default class Alacrity extends Rating {
    private alacrityRating: Rating;

    constructor(alacrityRating: Rating) {
        super();
        this.alacrityRating = alacrityRating;
    }

    get rating() {
        return diminishingReturn(this.alacrityRating.value, 0.3, 3.2);
    }
}
