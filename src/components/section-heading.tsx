type SectionHeadingProps = {
  label: string;
};

const SectionHeading = ({ label }: SectionHeadingProps) => {
  return (
    <p className="border-b-2 border-gray-700 pb-1 mb-2 text-muted-foreground">
      {label}
    </p>
  );
};

export default SectionHeading;
