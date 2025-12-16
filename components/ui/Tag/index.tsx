import { ReactNode } from "react";

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="flex gap-2.5 items-center">
      {children}
    </span>
  );
}

function TagElement({ children }: { children: ReactNode }) {
  return (
    <blockquote className="bg-[#373737]/70 p-2 text-description rounded-[3px]">
      {children}
    </blockquote>
  );
}

Tag.Element = TagElement;

export default Tag;