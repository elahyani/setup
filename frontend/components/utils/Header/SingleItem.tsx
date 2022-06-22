import Link from "next/link";
import { FC } from "react";

interface HeaderItemProps {
  icon: React.ReactNode;
  routeTo: string;
}

const HeaderItem: FC<HeaderItemProps> = ({ icon, routeTo }) => {
  return (
    <Link href={routeTo}>
      <li className="rounded-full m-2 hover:cursor-pointer transition duration-300 hover:opacity-70">
        {icon}
      </li>
    </Link>
  );
};

export default HeaderItem;
