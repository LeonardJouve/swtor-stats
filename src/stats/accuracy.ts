import {diminishingReturn} from "../utils";
import Rating from "./rating";

export default class Accuracy extends Rating {
    private accuracyRating: Rating;

    constructor(accuracyRating: Rating) {
        super();
        this.accuracyRating = accuracyRating;
    }

    get rating(): number {
        return diminishingReturn(this.accuracyRating.value, 0.3, 3.2);
    }
}
