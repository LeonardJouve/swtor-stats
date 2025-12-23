import {percentageIncrease} from "../utils";

export default class Stat {
    protected initial: number = 0;
    protected coefficient: number = 0;
    private _rating: number = 0;

    get rating(): number {
        return this._rating;
    }

    set rating(newRating: number) {
        this._rating = newRating;
    }

    get value() {
        return percentageIncrease(this.coefficient, this.initial + this.rating);
    }
}

