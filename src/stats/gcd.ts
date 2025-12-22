import Rating from "./rating";

export default class GCD extends Rating {
    private alacrity: Rating;

    constructor(alacrity: Rating) {
        super();
        this.alacrity = alacrity;
    }

    get rating() {
        const gcd = 1.5 / (this.alacrity.value + 1);

        return Math.ceil(gcd * 10) / 10;
    }
}
