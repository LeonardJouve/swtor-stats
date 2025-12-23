import {diminishingReturn} from "../utils";
import Stat from "./stat";

export default class Accuracy extends Stat {
    private accuracyRating: Stat;

    constructor(accuracyRating: Stat) {
        super();
        this.accuracyRating = accuracyRating;
    }

    get rating(): number {
        return diminishingReturn(this.accuracyRating.value, 0.3, 3.2);
    }
}
