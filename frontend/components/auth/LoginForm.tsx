import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LoginSideImage from "../utils/LoginSideImage";
import ErrorAlert from "../utils/ErrorAlert";
import { FormInput, FormCheckbox, FormSubmit } from "../utils/FormInputs";

const LoginForm: FC = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);
  const [isFormDataError, setIsFormDataError] = useState<{
    email: number;
    password: number;
  }>({
    email: 0,
    password: 0,
  });

  const submitLogin = (e: any) => {
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    e.preventDefault();
    setIsFormDataError({ email: 0, password: 0 });
    if (!userEmail) {
      setIsFormDataError((state) => {
        state.email = 1;
        return state;
      });
    }

    if (!userPassword) {
      setIsFormDataError((state) => {
        state.password = 1;
        return state;
      });
    }

    if (userEmail && userPassword) {
      if (!userEmail.match(emailPattern)) {
        setIsFormDataError((state) => {
          state.email = 2;
          return state;
        });
        return;
      }
      if (userPassword.length < 6) {
        setIsFormDataError((state) => {
          state.password = 2;
          return state;
        });
        return;
      }
      alert(`${userEmail} is logged in!`);
      console.log(
        `email: ${userEmail}\npassword: ${userPassword}\nremember: ${isRemember}`
      );
    }

    setUserEmail("");
    setUserPassword("");
    setIsRemember(false);
  };

  return (
    <main className="w-full h-screen bg-white flex">
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
        <div className="flex flex-col items-center mt-8 mb-4 lg:w-[90px] w-[70px]">
          <Image
            src={"https://appli.hsabati.com/assets/images/img_fac/login.png"}
            width="90"
            height="90"
          />
          <h1 className="text-[#26add5] font-bold tracking-wide text-[30px] my-4">
            Connexion
          </h1>
        </div>
        <div className="w-4/6 flex flex-col items-center p-1">
          {isFormDataError.email === 1 && (
            <ErrorAlert errorMessage="The Email field is required." />
          )}
          {isFormDataError.password === 1 && (
            <ErrorAlert errorMessage="The Password field is required." />
          )}
          {isFormDataError.email === 2 && (
            <ErrorAlert errorMessage="The Email field must contain a valid email address." />
          )}
          {isFormDataError.password === 2 && (
            <ErrorAlert errorMessage="Email or password is invalid" />
          )}
        </div>
        <form className="w-5/6 lg:w-4/6">
          <FormInput
            label="Email"
            placeholder="Email"
            inputType="text"
            labelClasses="text-lg"
            value={userEmail}
            changeValue={setUserEmail}
          />
          <FormInput
            label="Mot de passe"
            placeholder="Mot de passe"
            inputType="password"
            labelClasses="text-lg"
            value={userPassword}
            changeValue={setUserPassword}
          />
          <FormCheckbox
            inputId="rememberme"
            label="Se souvenir de moi"
            isChecked={isRemember}
            changeValue={setIsRemember}
          />
          <FormSubmit value="Connexion" submitHandler={submitLogin} />
          <Link href={"/authentication/forgot_password"}>
            <p className="w-40 text-sm m-4 text-[#26add5] tracking-wide hover:underline cursor-pointer transition duration-200">
              Mot de passe oublié ?
            </p>
          </Link>
        </form>
      </div>
      <LoginSideImage />
    </main>
  );
};

export default LoginForm;
