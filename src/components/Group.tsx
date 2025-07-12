import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface GroupProps {
  className?: string;
  children: ReactNode;
}

const Group: React.FC<GroupProps> = ({ className, children }) => {
  return <div className={twMerge(`flex gap-2`, className)}>{children}</div>;
};

export default Group;
