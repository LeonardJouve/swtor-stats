import {diminishingReturn} from "../utils";
import Stat from "./stat";

export default class Absorb extends Stat {
    private absorbRating: Stat;

    constructor(absorbRating: Stat) {
        super();
        this.absorbRating = absorbRating;
    }

    get rating(): number {
        return diminishingReturn(this.absorbRating.value, 0.5, 2.189);
    }
}
