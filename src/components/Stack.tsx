import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface StackProps {
  className?: string;
  children: ReactNode;
}
const Stack: React.FC<StackProps> = ({ className, children }) => {
  return (
    <div className={twMerge("flex flex-col gap-2", className)}>{children}</div>
  );
};

export default Stack;
