'use client';

import { useState } from 'react';

import { cn } from '@/utils/styles';

import { Copy } from '../Icon';

type CopyableTextProps = {
  className?: string;
  value?: string;
  placeholder?: string;
};

const COPIED_DURATION = 2500;

export const CopyableText = ({ className = '', value, placeholder }: CopyableTextProps) => {
  const [isCopied, setIsCopied] = useState(false);

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
    <div className={cn('flex items-center justify-between bg-grey-dark p-4', className)}>
      <span className={cn('mr-3 flex-1 text-2xl text-grey-lightest', !value && 'opacity-25')}>
        {value || placeholder}
      </span>
      {isCopied && <span className="mr-4 uppercase text-green">copied</span>}
      <Copy
        title="copy value"
        className={cn(
          'h-5 w-[17.5px] text-green',
          value ? 'cursor-pointer hover:text-grey-lightest' : 'opacity-25',
          isCopied && 'text-green hover:text-green'
        )}
        onClick={handleCopy}
      />
    </div>
  );
};
