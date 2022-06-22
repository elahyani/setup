import { FC } from "react";
import Sidebar from "./SideBar";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex w-full h-full">
      <div className="relative md:w-[130px]">
        <Sidebar />
      </div>
      <div className="md:relative  w-full h-full">
        <Header />
        {children}
      </div>
    </main>
  );
};

export default Layout;
