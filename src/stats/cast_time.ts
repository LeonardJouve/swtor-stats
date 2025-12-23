import Stat from "./stat";

export default class CastTime extends Stat {
    private alacrity: Stat;

    constructor(alacrity: Stat) {
        super();
        this.alacrity = alacrity;
    }

    get rating() {
        return 1 / (1 + this.alacrity.value * 100);
    }
}
