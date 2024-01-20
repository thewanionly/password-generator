import { twMerge } from 'tailwind-merge';

type ButtonProps = React.ComponentProps<'button'> & {
  /* Button's label */
  label: string;
};

export const Button = ({ className = '', label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={twMerge(
        `border-2 border-green bg-green px-16 py-5 uppercase text-grey-dark hover:bg-grey-dark hover:text-green ${className}`
      )}
      {...props}
    >
      {label}
    </button>
  );
};
