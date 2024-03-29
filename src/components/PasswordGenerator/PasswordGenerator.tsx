'use client';

import { FormEvent, useState } from 'react';

import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { CopyableText } from '@/components/CopyableText';
import { FormControlLabel } from '@/components/FormControlLabel';
import { ArrowRight } from '@/components/Icon';
import { PasswordCharLengthSlider } from '@/components/PasswordCharLengthSlider';
import { PasswordStrengthMeter } from '@/components/PasswordStrengthMeter';
import { PasswordOptions } from '@/constants/password';
import { generatePassword } from '@/utils/password/generatePassword';
import { cn } from '@/utils/styles';

import { PASSWORD_GENERATOR, PASSWORD_RULES } from './PasswordGenerator.constants';

export type PasswordGeneratorProps = {
  className?: string;
  initialCharLength?: number;
  initialAppliedRules?: PasswordOptions;
};

const transformInitalAppliedRules = (initialAppliedRules?: PasswordOptions): Set<string> => {
  if (!initialAppliedRules) return new Set<string>();

  return new Set<string>(
    Object.entries(initialAppliedRules)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, value]) => value)
      .map(([key]) => PASSWORD_RULES[key as keyof PasswordOptions].value)
  );
};

export const PasswordGenerator = ({
  className = '',
  initialCharLength = 0,
  initialAppliedRules,
}: PasswordGeneratorProps) => {
  const [password, setPassword] = useState('');
  const [charLength, setCharLength] = useState(initialCharLength);
  const [appliedRules, setAppliedRules] = useState<Set<string>>(
    transformInitalAppliedRules(initialAppliedRules)
  );

  const hasAppliedRules = charLength > 0 && appliedRules.size > 0;

  const handleCheckedChange = (value: string) => (checked: boolean) => {
    const newAppliedRules = new Set([...appliedRules]);

    if (checked) {
      newAppliedRules.add(value);
    } else {
      newAppliedRules.delete(value);
    }

    setAppliedRules(newAppliedRules);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const generatedPassword = generatePassword(charLength, {
      withUpperCase: appliedRules.has(PASSWORD_RULES.withUpperCase.value),
      withLowerCase: appliedRules.has(PASSWORD_RULES.withLowerCase.value),
      withNumbers: appliedRules.has(PASSWORD_RULES.withNumbers.value),
      withSymbols: appliedRules.has(PASSWORD_RULES.withSymbols.value),
    });

    setPassword(generatedPassword);
  };

  return (
    <div className={cn('bg-grey-darkest', className)}>
      <h1 className="mb-4 text-center text-grey md:mb-8 md:text-2xl">{PASSWORD_GENERATOR.TITLE}</h1>
      <CopyableText
        className="md:mb mb-4"
        placeholder={PASSWORD_GENERATOR.COPYABLE_TEXT_PLACEHOLDER}
        value={password}
      />
      <form className="bg-grey-dark p-4 md:p-8" onSubmit={handleSubmit}>
        <PasswordCharLengthSlider
          className="mb-[42px]"
          value={charLength}
          onChange={setCharLength}
        />
        {Object.values(PASSWORD_RULES).map(({ label, value }) => (
          <FormControlLabel
            key={value}
            className="mb-4 md:gap-6 md:text-lg"
            control={
              <Checkbox
                id={value}
                checked={appliedRules.has(value)}
                onCheckedChange={handleCheckedChange(value)}
              />
            }
            label={label}
          />
        ))}
        <PasswordStrengthMeter className="mb-4 mt-8 md:mb-8" password={password} />
        <Button
          className="flex w-full items-center justify-center gap-4 md:gap-6 md:text-lg"
          disabled={!hasAppliedRules}
          type="submit"
        >
          {PASSWORD_GENERATOR.BUTTON_LABEL} <ArrowRight className="w-3" title="arrow right" />
        </Button>
      </form>
    </div>
  );
};
