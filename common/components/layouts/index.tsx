import { ReactNode } from "react";

import Navbar from "./navbar";

interface LayoutsProps {
  children: ReactNode;
}

const Layouts = ({ children }: LayoutsProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layouts;
