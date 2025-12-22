import Player from "../player";
import Stat from "./stat";
import {linear} from "../utils";

export default class BonusHealing {
    private static fromMastery({mastery, masteryIncrease}: Player): number {
        return linear(0.14, mastery) * (1 + masteryIncrease);
    }

    private static fromPower({power, powerIncrease}: Player): number {
        return linear(0.17, power) * (1 + powerIncrease);
    }

    static calculate(player: Player): number {
        return (this.fromMastery(player) + this.fromPower(player)) * (1 + player.bonusHealingIncrease);
    }
}

BonusHealing satisfies Stat;
