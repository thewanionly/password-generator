import { Slider } from '@/components/Slider';

import {
  PASSWORD_CHARACTER_LENGTH_LABEL,
  MAX_PASSWORD_LENGTH,
} from './PasswordCharLengthSlider.constants';

export type PasswordCharLengthSliderProps = {
  className?: string;
  value: number;
  onChange: (value: number) => void;
};

export const PasswordCharLengthSlider = ({
  className = '',
  value,
  onChange,
}: PasswordCharLengthSliderProps) => {
  const handleSliderChange = (newValue: number[]) => {
    onChange(newValue[0]);
  };

  return (
    <div className={className}>
      <div className="mb-[18px] flex items-center justify-between md:mb-[26px]">
        <span className="text-grey-lightest md:text-lg">{PASSWORD_CHARACTER_LENGTH_LABEL}</span>
        <span className="text-2xl text-green md:text-[32px]">{value}</span>
      </div>
      <Slider
        value={[value]}
        min={0}
        max={MAX_PASSWORD_LENGTH}
        onValueChange={handleSliderChange}
      />
    </div>
  );
};
