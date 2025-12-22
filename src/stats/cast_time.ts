import Rating from "./rating";

export default class CastTime extends Rating {
    private alacrity: Rating;

    constructor(alacrity: Rating) {
        super();
        this.alacrity = alacrity;
    }

    get rating() {
        return 1 / (1 + this.alacrity.value * 100);
    }
}
