import { FC, useState } from "react";
import Image from "next/image";
import { FormSubmit } from "../utils/FormInputs";
import ErrorAlert from "../utils/ErrorAlert";

const ForgetPassForm: FC = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isFormDataError, setIsFormDataError] = useState<{
    emailStatus: number;
  }>({ emailStatus: 0 });

  const resetPasswordHandler = (e: any): void => {
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    e.preventDefault();
    setIsFormDataError((state) => (state = { emailStatus: 0 }));
    if (!userEmail) {
      setIsFormDataError((state) => {
        state.emailStatus = 1;
        return state;
      });
      return;
    }
    if (!userEmail.match(emailPattern)) {
      setIsFormDataError((state) => (state = { emailStatus: 2 }));
      return;
    }
    alert(`A reset password link sent to ${userEmail}`);
    setUserEmail("");
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <div className="absolute lg:hidden top-3">
        <Image
          src={
            "https://appli.hsabati.com/assets/images/img_fac/Hsabati-Logo-Sqr.png"
          }
          width={70}
          height={79}
        />
      </div>
      <div className="flex flex-col items-center mb-16">
        <Image
          src={"https://appli.hsabati.com/assets/images/img_fac/password.png"}
          width={90}
          height={43}
        />
        <h1 className="text-[30px] text-[#26add5] font-bold tracking-wider">
          Mot de passe oublié ?
        </h1>
      </div>
      <form className="w-5/6 lg:w-4/6 flex flex-col items-center">
        <div className="w-full items-center p-1">
          {isFormDataError.emailStatus === 1 && (
            <ErrorAlert errorMessage="The Email field is required." />
          )}
          {isFormDataError.emailStatus === 2 && (
            <ErrorAlert errorMessage="The Email field must contain a valid email address." />
          )}
        </div>
        <input
          type="text"
          name="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="Votre Email"
          className="border-b text-xl border-b-[#cbd5e1] py-2 px-4 mb-4 h-[50px] focus:outline-none focus:bg-transparent focus:border-b-2 focus:border-b-[#26add5] w-full"
        />
        <FormSubmit
          value="Réinitialiser le mot de passe"
          submitHandler={resetPasswordHandler}
        />
      </form>
    </div>
  );
};

export default ForgetPassForm;
