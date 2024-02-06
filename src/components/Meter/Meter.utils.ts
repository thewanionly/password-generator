import { MeterBarLevel } from './Meter.constants';

interface LevelCondition {
  condition: boolean;
  level: MeterBarLevel;
}

export const getMeterLevel = (value: number, max: number) => {
  const percentage = value / max;

  const levelConditions: LevelCondition[] = [
    {
      condition: percentage > 0 && percentage <= 0.33,
      level: MeterBarLevel.LOW,
    },
    {
      condition: percentage > 0.33 && percentage <= 0.66,
      level: MeterBarLevel.MODERATE,
    },
    {
      condition: percentage > 0.66 && percentage < 1,
      level: MeterBarLevel.MEDIUM,
    },
    { condition: percentage >= 1, level: MeterBarLevel.HIGH },
  ];

  const { level = MeterBarLevel.EMPTY } = levelConditions.find(({ condition }) => condition) ?? {};

  return level;
};

export const getMeterFilledBars = (value: number, max: number, numOfBars: number) => {
  const percentage = value / max;
  const filledBars = percentage > 0 ? Math.max(Math.floor(numOfBars * percentage), 1) : 0;

  return filledBars;
};
