import { LucideProps } from "lucide-react";
import { useState } from "react";

export interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: React.FC<LucideProps>;
  onClick?: () => void;
  filled?: boolean;
  label: string;
  fill: string;
}

const ActionButton = ({
  Icon,
  fill,
  label,
  onClick,
  filled = false,
}: ActionButtonProps) => {
  const [isFilled, setFilled] = useState(filled);

  const handleClick = () => {
    setFilled(!isFilled);
    onClick && onClick();
  };
  return (
    <button className="flex flex-col items-center" onClick={handleClick}>
      <Icon
        size={38}
        strokeWidth={1.1}
        color={`${isFilled ? "#445566" : "#bbccdd"}`}
        fill={`${isFilled ? fill : "none"}`}
      />
      <p>{label}</p>
    </button>
  );
};

export default ActionButton;
