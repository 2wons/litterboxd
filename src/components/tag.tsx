export interface TagProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
}

const Tag = ({ title, ...props }: TagProps) => {
  return (
    <a
      {...props}
      className="bg-[#283038] p-1.5 text-xs text-gray-400 hover:text-gray-300 rounded-sm"
    >
      <span>{title}</span>
    </a>
  );
};

export default Tag;
