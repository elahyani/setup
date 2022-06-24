import { FC } from "react";

interface Props {
  label: string;
  clickEventFunc: () => void;
}

const Button: FC<Props> = ({ label, clickEventFunc }) => {
  return (
    <button
      onClick={clickEventFunc}
      className="bg-blue-400 mr-4 py-2 px-4 rounded-lg border-2 border-blue-500 text-white font-bold text-lg"
    >
      {label}
    </button>
  );
};

export default Button;
