import { FC } from "react";

interface Props {
  errorMessage: string;
}

const ErrorAlert: FC<Props> = ({ errorMessage }) => {
  return (
    <div className="bg-[#f2dede] text-[#a94442] rounded border border-[#ebccd1] py-[15px] w-full flex items-center justify-center my-2 font-thin tracking-widest">
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorAlert;
