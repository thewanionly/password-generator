import { FormEvent } from 'react';

import { cn } from '@/utils/styles';

import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { CopyableText } from '../CopyableText';
import { FormControlLabel } from '../FormControlLabel';
import { ArrowRight } from '../Icon';
import { PasswordCharLengthSlider } from '../PasswordCharLengthSlider';
// import { PasswordCharLengthSlider } from '../PasswordCharLengthSlider';
import { PasswordStrengthMeter } from '../PasswordStrengthMeter';
import { PASSWORD_GENERATOR, PASSWORD_RULES } from './PasswordGenerator.constants';

export type PasswordGeneratorProps = {
  className?: string;
  password: string;
  numOfChars?: number;
  rulesList?: string[];
};

// states:
// 1. numOfChars: number
// 2. appliedRules: string[]
// 3. passwordText: string
export const PasswordGenerator = ({
  className = '',
  password,
  numOfChars = 0,
  rulesList = [],
}: PasswordGeneratorProps) => {
  const hasAppliedRules = numOfChars > 0 && rulesList.length > 0;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // TODO: call onSubmit maybe
  };

  return (
    <div className={cn('bg-grey-darkest p-4', className)}>
      <h1 className="mb-4 text-center text-grey">{PASSWORD_GENERATOR.TITLE}</h1>
      <CopyableText
        className="mb-4"
        placeholder={PASSWORD_GENERATOR.COPYABLE_TEXT_PLACEHOLDER}
        value={password}
      />
      <form className="bg-grey-dark p-4" onSubmit={handleSubmit}>
        <PasswordCharLengthSlider className="mb-11" value={numOfChars} onChange={() => {}} />
        {PASSWORD_RULES.map(({ label, value }) => (
          <FormControlLabel
            key={value}
            className="mb-4"
            control={<Checkbox id={value} checked={rulesList.includes(value)} />}
            label={label}
          />
        ))}
        <PasswordStrengthMeter className="mb-4 mt-8" value={0} />
        <Button
          className="flex w-full items-center justify-center gap-4"
          disabled={!hasAppliedRules}
          type="submit"
        >
          {PASSWORD_GENERATOR.BUTTON_LABEL} <ArrowRight className="w-3" title="arrow right" />
        </Button>
      </form>
    </div>
  );
};
