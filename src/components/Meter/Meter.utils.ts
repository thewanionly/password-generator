import { MeterBarLevel } from './Meter.constants';

interface LevelCondition {
  condition: boolean;
  level: MeterBarLevel;
}

export const getMeterLevel = (value: number, max: number) => {
  const percentage = (value / max) * 100;

  const levelConditions: LevelCondition[] = [
    {
      condition: percentage > 0 && percentage <= 33,
      level: MeterBarLevel.QUARTER,
    },
    {
      condition: percentage > 33 && percentage <= 66,
      level: MeterBarLevel.HALF,
    },
    {
      condition: percentage > 66 && percentage <= 99,
      level: MeterBarLevel.THREE_QUATERS,
    },
    { condition: percentage === 100, level: MeterBarLevel.FULL },
  ];

  const { level = MeterBarLevel.EMPTY } = levelConditions.find(({ condition }) => condition) ?? {};

  return level;
};
