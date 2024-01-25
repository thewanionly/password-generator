'use client';

import * as React from 'react';

import * as LabelPrimitive from '@radix-ui/react-label';

import { cn } from '@/utils/styles';

export type FormControlLabelProps = React.ComponentProps<'div'> & {
  control: React.ReactElement;
  label: string;
  required: boolean;
  disabled: boolean;
};

const FormControlLabel = React.forwardRef<HTMLDivElement, FormControlLabelProps>(
  ({ className, id, control, label, required, disabled, ...props }, ref) => {
    const controlId = React.useId() ?? id;

    return (
      <div className={cn(`flex items-center gap-5`, className)} ref={ref} {...props}>
        {React.cloneElement(control, { id: controlId, required, disabled })}
        <LabelPrimitive.Root
          htmlFor={controlId}
          aria-required={required}
          className="text-medium font-bold leading-none text-grey-light peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label} {required && '*'}
        </LabelPrimitive.Root>
      </div>
    );
  }
);

FormControlLabel.displayName = 'FormControlLabel';

export { FormControlLabel };
