import {linear} from "../utils";
import Rating from "./rating";

export default class BonusDamage extends Rating {
    private masteryRating: Rating;
    private powerRating: Rating;

    constructor(masteryRating: Rating, powerRating: Rating) {
        super();
        this.masteryRating = masteryRating;
        this.powerRating = powerRating;
    }

    get rating() {
        const mastery = linear(0.2, this.masteryRating.value);
        const power = linear(0.23, this.powerRating.value);
        return mastery + power;
    }
}
