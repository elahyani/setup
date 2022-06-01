import { FC } from "react";

interface FormInputProps {
  label: string;
  inputType: string;
  placeholder: string;
  labelClasses?: string;
  inputClasses?: string;
  value: string;
  changeValue: (value: string) => void;
}

export const FormInput: FC<FormInputProps> = ({
  label,
  inputType,
  placeholder,
  labelClasses,
  value,
  changeValue,
}) => {
  return (
    <div className="m-4 flex flex-col items-center">
      <label
        htmlFor={label}
        className={`text-[#26add5] font-bold tracking-wider ${labelClasses} `}
      >
        {label}
      </label>
      <input
        type={inputType}
        name={label}
        value={value}
        onChange={(e) => changeValue(e.target.value)}
        placeholder={placeholder}
        className="border-b text-xl border-b-[#cbd5e1] py-2 px-4 h-[50px] focus:outline-none focus:bg-transparent focus:border-b-2 focus:border-b-[#26add5] w-full"
      />
    </div>
  );
};

interface FormCheckboxProps {
  inputId: string;
  label: string;
  isChecked: boolean;
  changeValue: (value: boolean) => void;
}

export const FormCheckbox: FC<FormCheckboxProps> = ({
  inputId,
  label,
  isChecked,
  changeValue,
}) => {
  return (
    <div className="my-4 mx-6 flex items-center">
      <label
        htmlFor={inputId}
        className="block relative pl-8 cursor-pointer text-xl text-[#26add5] font-normal tracking-wide"
      >
        <input
          type="checkbox"
          name={inputId}
          id={inputId}
          checked={isChecked}
          onChange={(e) => changeValue(e.target.checked)}
          className="absolute opacity-0 cursor-pointer h-0 w-0"
        />
        {label}
        <span
          className={`after:content-[''] after:absolute after:w-1.5 after:h-2.5 after:border-r-[3px] after:border-b-[3px] after:opacity-0 after:top-[44%] after:left-[50%] duration-300 after:border-white after:text-[#cbd5e1] absolute rounded top-[4.5px] left-0 h-5 w-5 bg-white border border-[#cbd5e1] ${
            isChecked
              ? "bg-[#26add5] after:opacity-100 after:-translate-x-1/2 after:-translate-y-1/2 after:rotate-45"
              : ""
          }`}
        ></span>
      </label>
    </div>
  );
};

interface FormSubmitProps {
  classes?: string;
  value: string;
  submitHandler: (e: any) => void;
}

export const FormSubmit: FC<FormSubmitProps> = ({
  classes,
  value,
  submitHandler,
}) => {
  return (
    <div className="flex justify-center w-full">
      <input
        type="submit"
        value={value}
        onClick={submitHandler}
        className={`${classes} w-[80%] h-[50px] tracking-wide cursor-pointer hover:bg-[#2988a7] mt-[30px] hover:opacity-90 transition duration-300 rounded-full text-white font-bold text-lg bg-[#26add5] text-center`}
      />
    </div>
  );
};
