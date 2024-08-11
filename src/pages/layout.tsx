import React, {ReactNode} from "react";
import Header from "../components/header";
import Footer from "../components/footer";

interface layoutProps {
    children: ReactNode,
    data?: any;
}

const layout: React.FC<layoutProps> = ({children, data}) => {
  return (
    <>
    <div className="flex flex-col w-full h-screen">
      <Header data={data} />
      <main>{children}</main>
      <Footer data={data} />
    </div>
    </>
  );
};

export default layout;
