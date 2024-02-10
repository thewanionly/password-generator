'use client';

import * as React from 'react';

import { Button } from '@/components/Button';
import { Copy } from '@/components/Icon';
import { cn } from '@/utils/styles';

type CopyableTextProps = {
  className?: string;
  value?: string;
  placeholder?: string;
};

const COPIED_DURATION = 2500;

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
          'flex items-center justify-between bg-grey-dark p-4',
          !value && 'pointer-events-none',
          className
        )}
      >
        <span
          className={cn('mr-3 flex-1 text-2xl text-grey-lightest', !value && 'opacity-25')}
          data-testid={value && 'copyable-text-value'}
        >
          {value || placeholder}
        </span>
        {isCopied && <span className="mr-4 uppercase text-green">copied</span>}
        <Button variant="ghost" onClick={handleCopy} disabled={!value} aria-label="copy value">
          <Copy
            title="copy value"
            className={cn(
              'h-5 w-[17.5px] text-green',
              value ? 'cursor-pointer hover:text-grey-lightest' : 'opacity-25',
              isCopied && 'text-green hover:text-green'
            )}
          />
        </Button>
      </div>
    );
  }
);

CopyableText.displayName = 'CopyableText';
