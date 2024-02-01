import { MeterBarLevel } from './Meter.constants';

interface LevelCondition {
  condition: boolean;
  level: MeterBarLevel;
}

export const getMeterLevel = (value: number, max: number, numOfBars: number) => {
  const percentage = value / max;
  const filledBars = percentage > 0 ? Math.max(Math.floor(numOfBars * percentage), 1) : 0;

  const levelConditions: LevelCondition[] = [
    {
      condition: percentage > 0 && percentage <= 0.33,
      level: MeterBarLevel.QUARTER,
    },
    {
      condition: percentage > 0.33 && percentage <= 0.66,
      level: MeterBarLevel.HALF,
    },
    {
      condition: percentage > 0.66 && percentage < 1,
      level: MeterBarLevel.THREE_QUARTERS,
    },
    { condition: percentage >= 1, level: MeterBarLevel.FULL },
  ];

  const { level = MeterBarLevel.EMPTY } = levelConditions.find(({ condition }) => condition) ?? {};

  return {
    level,
    filledBars,
  };
};
