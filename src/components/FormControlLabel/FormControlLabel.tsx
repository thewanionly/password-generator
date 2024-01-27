'use client';

import * as React from 'react';

import * as LabelPrimitive from '@radix-ui/react-label';

import { cn } from '@/utils/styles';

import { REQUIRED_SYMBOL } from './FormControlLabel.consants';

export type FormControlLabelProps = React.ComponentProps<'div'> & {
  control: React.ReactElement;
  label: string;
  required?: boolean;
  disabled?: boolean;
};

const FormControlLabel = React.forwardRef<HTMLDivElement, FormControlLabelProps>(
  ({ className, id, control, label, required, disabled, ...props }, ref) => {
    const controlProps = {
      id: React.useId() ?? id ?? control.props.id,
      disabled: disabled ?? control.props.disabled,
      required: required ?? control.props.required,
    };

    return (
      <div className={cn(`flex items-center gap-5`, className)} ref={ref} {...props}>
        {React.cloneElement(control, controlProps)}
        <LabelPrimitive.Root
          htmlFor={controlProps.id}
          aria-required={controlProps.required}
          className="text-medium font-bold leading-none text-grey-lightest peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label} {controlProps.required && REQUIRED_SYMBOL}
        </LabelPrimitive.Root>
      </div>
    );
  }
);

FormControlLabel.displayName = 'FormControlLabel';

export { FormControlLabel };
