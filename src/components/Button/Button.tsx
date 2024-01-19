export const Button = ({ label }: { label: string }) => {
  return (
    <button type="button" className=" bg-green px-4 py-2 text-grey-dark">
      {label}
    </button>
  );
};
