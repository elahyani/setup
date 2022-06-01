import { FC } from "react";
import Image from "next/image";

const LoginSideImage: FC = () => {
  return (
    <div className="flex-1 hidden lg:flex justify-center items-center flex-col bg-[url('https://appli.hsabati.com/assets/images/authentification.png')] bg-[#2a4c57] bg-no-repeat bg-cover bg-right bg-blend-overlay">
      <Image
        src={
          "https://appli.hsabati.com/assets/images/img_fac/Hsabati-Logo-Sqr.png"
        }
        width={70}
        height={79}
      />
      <h3 className="font-bold mt-5 mb-2 text-2xl tracking-wider text-white">
        HSABATI
      </h3>
      <h5 className="text-[#78d9ff] tracking-[3px] font-normal text-sm">
        LE PARTENAIRE DES DÉCIDEURS
      </h5>
    </div>
  );
};

export default LoginSideImage;
