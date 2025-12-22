import {diminishingReturn} from "../utils";
import Rating from "./rating";

export default class Shield extends Rating {
    private shieldRating: Rating;

    constructor(shieldRating: Rating) {
        super();
        this.shieldRating = shieldRating;
    }

    get rating() {
        return diminishingReturn(this.shieldRating.value, 0.5, 2.079);
    }
}
