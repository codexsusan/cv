import { cn } from "../../utils";

function Header({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) {
  return <h1 className={cn("text-2xl font-bold", classNames)}>{children}</h1>;
}

export default Header;
