import Player from "../player";
import Stat from "./stat";
import {linear} from "../utils";


export default class BonusDamage {
    private static fromMastery({mastery, masteryIncrease}: Player): number {
        return linear(0.2, mastery) * (1 + masteryIncrease);
    }

    private static fromPower({power, powerIncrease}: Player): number {
        return linear(0.23, power) * (1 + powerIncrease);
    }

    static calculate(player: Player): number {
        return (this.fromMastery(player) + this.fromPower(player)) * (1 + player.bonusDamageIncrease);
    }
}

BonusDamage satisfies Stat;
