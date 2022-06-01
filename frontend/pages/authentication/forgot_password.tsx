import { NextPage } from "next";
import LoginSideImage from "../../components/utils/LoginSideImage";
import ForgetPassForm from "../../components/auth/ForgetPassForm";

const ForgotPasssword: NextPage = () => {
  return (
    <main className="h-screen w-full flex">
      <ForgetPassForm />
      <LoginSideImage />
    </main>
  );
};

export default ForgotPasssword;
