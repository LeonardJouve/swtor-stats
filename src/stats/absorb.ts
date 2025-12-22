import {diminishingReturn} from "../utils";
import Rating from "./rating";

export default class Absorb extends Rating {
    private absorbRating: Rating;

    constructor(absorbRating: Rating) {
        super();
        this.absorbRating = absorbRating;
    }

    get rating(): number {
        return diminishingReturn(this.absorbRating.value, 0.5, 2.189);
    }
}
