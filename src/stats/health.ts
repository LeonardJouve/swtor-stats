import Stat from "./stat";

export default class Health extends Stat {
    private enduranceRating: Stat;

    constructor(enduranceRating: Stat) {
        super();
        this.initial += 23_750;
        this.enduranceRating = enduranceRating;
    }

    get rating() {
        return this.enduranceRating.value * 12;
    }
}
