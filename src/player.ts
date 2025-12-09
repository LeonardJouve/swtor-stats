export default class Player {
    private _level: number;

    // Primary
    private _endurance: number;
    private _mastery: number;

    // Secondary
    private _power: number;
    private _defence: number;

    // Tertiary
    private _alacrity: number;
    private _critical: number;
    private _accuracy: number;
    private _absorb: number;
    private _shield: number;
    private _presence: number;

    // Bonus coefficient
    private _enduranceIncrease: number;
    private _maxHealthIncrease: number;
    private _masteryIncrease: number;
    private _powerIncrease: number;
    private _bonusDamageIncrease: number;
    private _bonusHealingIncrease: number;
    private _meleeRangedDefenceIncrease: number;

    constructor() {
        this._level = 80;

        this._endurance = 0;
        this._mastery = 0;

        this._power = 0;
        this._defence = 0;

        this._alacrity = 800;
        this._critical = 0;
        this._accuracy = 0;
        this._absorb = 0;
        this._shield = 0;
        this._presence = 0;

        this._enduranceIncrease = 0;
        this._maxHealthIncrease = 0;
        this._masteryIncrease = 0;
        this._powerIncrease = 0;
        this._bonusDamageIncrease = 0;
        this._bonusHealingIncrease = 0;
        this._meleeRangedDefenceIncrease = 0;
    }

    get level() {
        return this._level;
    }

    get endurance() {
        return this._endurance;
    }

    get mastery() {
        return this._mastery;
    }

    get power() {
        return this._power;
    }

    get defence() {
        return this._defence;
    }

    get alacrity() {
        return this._alacrity;
    }

    get critical() {
        return this._critical;
    }

    get accuracy() {
        return this._accuracy;
    }

    get absorb() {
        return this._absorb;
    }

    get shield() {
        return this._shield;
    }

    get presence() {
        return this._presence;
    }

    get enduranceIncrease() {
        return this._enduranceIncrease;
    }

    get maxHealthIncrease() {
        return this._maxHealthIncrease;
    }

    get masteryIncrease() {
        return this._masteryIncrease;
    }

    get powerIncrease() {
        return this._powerIncrease;
    }

    get bonusDamageIncrease() {
        return this._bonusDamageIncrease;
    }

    get bonusHealingIncrease() {
        return this._bonusHealingIncrease;
    }

    get meleeRangedDefenceIncrease() {
        return this._meleeRangedDefenceIncrease;
    }
}
