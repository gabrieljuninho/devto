import { ReactNode } from "react";

import Navbar from "./navbar";
import SidebarLeft from "./navbar/SidebarLeft";

interface LayoutsProps {
  children: ReactNode;
}

const Layouts = ({ children }: LayoutsProps) => {
  return (
    <>
      <Navbar />
      <SidebarLeft />
      {children}
    </>
  );
};

export default Layouts;
