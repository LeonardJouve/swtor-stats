import Stat from "./stat";

export default class GCD extends Stat {
    private alacrity: Stat;

    constructor(alacrity: Stat) {
        super();
        this.alacrity = alacrity;
    }

    get rating() {
        const gcd = 1.5 / (this.alacrity.value + 1);

        return Math.ceil(gcd * 10) / 10;
    }
}
