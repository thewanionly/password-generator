'use client';

import * as React from 'react';

import { Button } from '@/components/Button';
import { Copy } from '@/components/Icon';
import { cn } from '@/utils/styles';

import { COPIED_DURATION, COPIED_TEXT } from './CopyableText.constants';

type CopyableTextProps = {
  className?: string;
  value?: string;
  placeholder?: string;
};

export const CopyableText = React.forwardRef<HTMLDivElement, CopyableTextProps>(
  ({ className = '', value, placeholder }, ref) => {
    const [isCopied, setIsCopied] = React.useState(false);

    const handleCopy = () => {
      if (!value) return;

      // Copy to clipboard
      navigator.clipboard.writeText(value);
      setIsCopied(true);

      // Reset the "isCopied" state after a certain duration
      setTimeout(() => {
        setIsCopied(false);
      }, COPIED_DURATION);
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center justify-between bg-grey-dark p-4 md:px-8 md:py-5',
          className
        )}
      >
        <span
          className={cn(
            'mr-4 flex-1 text-2xl text-grey-lightest md:text-[32px]',
            !value && 'opacity-25'
          )}
          data-testid={value && 'copyable-text-value'}
        >
          {value || placeholder}
        </span>
        <div className="relative flex">
          {isCopied && (
            <span className="absolute right-7 flex h-full items-center bg-grey-dark p-1 text-sm uppercase text-green md:right-8 md:p-2 md:text-base">
              {COPIED_TEXT}
            </span>
          )}
          <Button variant="ghost" onClick={handleCopy} disabled={!value} aria-label="copy value">
            <Copy
              title="copy value"
              className={cn(
                'h-5 w-[17.5px] text-green md:h-6 md:w-[21px]',
                value ? 'cursor-pointer hover:text-grey-lightest' : 'opacity-25',
                isCopied && 'text-green hover:text-green'
              )}
            />
          </Button>
        </div>
      </div>
    );
  }
);

CopyableText.displayName = 'CopyableText';
