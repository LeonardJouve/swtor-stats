import {linear} from "../utils";
import Stat from "./stat";

export default class BonusHealing extends Stat {
    private masteryRating: Stat;
    private powerRating: Stat;

    constructor(masteryRating: Stat, powerRating: Stat) {
        super();
        this.masteryRating = masteryRating;
        this.powerRating = powerRating;
    }

    get rating() {
        const mastery = linear(0.14, this.masteryRating.value);
        const power = linear(0.17, this.powerRating.value);
        return mastery + power;
    }
}
