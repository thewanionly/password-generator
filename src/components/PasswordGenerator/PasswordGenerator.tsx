import { FormEvent, useState } from 'react';

import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { CopyableText } from '@/components/CopyableText';
import { FormControlLabel } from '@/components/FormControlLabel';
import { ArrowRight } from '@/components/Icon';
import { PasswordCharLengthSlider } from '@/components/PasswordCharLengthSlider';
import { PasswordStrengthMeter } from '@/components/PasswordStrengthMeter';
import { generatePassword } from '@/utils/password';
import { cn } from '@/utils/styles';

import { PASSWORD_GENERATOR, PASSWORD_RULES } from './PasswordGenerator.constants';

export type PasswordGeneratorProps = {
  className?: string;
  initialCharLength?: number;
  initialAppliedRules?: Set<string>;
};

export const PasswordGenerator = ({
  className = '',
  initialCharLength = 0,
  initialAppliedRules = new Set<string>(),
}: PasswordGeneratorProps) => {
  const [password, setPassword] = useState('');
  const [charLength, setCharLength] = useState(initialCharLength);
  const [appliedRules, setAppliedRules] = useState<Set<string>>(initialAppliedRules);

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
    <div className={cn('bg-grey-darkest p-4', className)}>
      <h1 className="mb-4 text-center text-grey">{PASSWORD_GENERATOR.TITLE}</h1>
      <CopyableText
        className="mb-4"
        placeholder={PASSWORD_GENERATOR.COPYABLE_TEXT_PLACEHOLDER}
        value={password}
      />
      <form className="bg-grey-dark p-4" onSubmit={handleSubmit}>
        <PasswordCharLengthSlider className="mb-11" value={charLength} onChange={setCharLength} />
        {Object.values(PASSWORD_RULES).map(({ label, value }) => (
          <FormControlLabel
            key={value}
            className="mb-4"
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
