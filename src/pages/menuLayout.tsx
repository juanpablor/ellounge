import React, {ReactNode} from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Navigation from "../components/nav";

interface menuLayoutProps {
    children: ReactNode,
    data?: any;
}

const menuLayout: React.FC<menuLayoutProps> = ({children, data}) => {
  return (
    <>
    <div className="flex flex-col w-full h-screen bg-secondary">
      <Header data={data} />
      <main>{children}</main>
      <div className="flex justify-center">

        <Navigation data={data} />
      </div>
    </div>
    </>
  );
};

export default menuLayout;
