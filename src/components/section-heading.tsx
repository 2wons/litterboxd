type SectionHeadingProps = {
  label: string;
  className?: string;
  rel?: JSX.Element;
};

const SectionHeading = ({ label, className, rel }: SectionHeadingProps) => {
  return (
    <p
      className={`flex justify-between border-b-2 border-gray-700 pb-1 mb-2 text-muted-foreground ${className}`}
    >
      {label}
      {rel}
    </p>
  );
};

export default SectionHeading;
