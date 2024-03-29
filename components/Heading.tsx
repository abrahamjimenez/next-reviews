import type { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}

export default function Heading({ children }: HeadingProps) {
  return <h1 className={"font-bold font-inter pb-3 text-2xl"}>{children}</h1>;
}
