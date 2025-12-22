export const LEVEL = 80;

export const diminishingReturn = (rating: number, baseDivisor: number, exponentDivisor: number) => {
        const base = 1 - 0.01 / baseDivisor;
        const power = (rating / LEVEL) / exponentDivisor;

        return baseDivisor * (1 - Math.pow(base, power));
};

export const linear = (coefficient: number, rating: number) => coefficient * rating;

export const percentageIncrease = (coefficient: number, value: number) => value * (1 + coefficient);
