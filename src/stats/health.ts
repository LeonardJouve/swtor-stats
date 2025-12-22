import Rating from "./rating";

export default class Health extends Rating {
    private enduranceRating: Rating;

    constructor(enduranceRating: Rating) {
        super();
        this.initial += 23_750;
        this.enduranceRating = enduranceRating;
    }

    get rating() {
        return this.enduranceRating.value * 12;
    }
}
