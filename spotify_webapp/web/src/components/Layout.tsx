import React from "react";
import { NavBar } from "./NavBar";
import { Wrapper } from "./Wrapper";


interface LayoutProps {
  name: string;
  variant: "small" | "regular";
}

export const Layout: React.FC<LayoutProps> = ({ name, variant, children }) => {
  return (
    <>
        <NavBar name={name}></NavBar>
        <Wrapper variant={variant}>{children}</Wrapper>
    </>
  );
};
