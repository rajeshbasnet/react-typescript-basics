import { ReactNode } from "react";

type OscarChildrenProps = {
  children: ReactNode;
};

export const Oscar: React.FC<OscarChildrenProps> = ({ children }) => {
  return <div>{children}</div>;
};
