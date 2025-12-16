import { MoveLeft, MoveRight } from "lucide-react";
import { ReactNode } from "react";

function Arrow({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full cursor-pointer border border-primary-750 p-2 hover:border-primary-100 text-primary-750 group">
      {children}
    </span>
  );
}

function ArrowRight() {
  return (
    <MoveRight className="text-primary-750 group-hover:text-primary-100" />
  );
}
function ArrowLeft() {
  return (
    <MoveLeft className="text-primary-750 group-hover:text-primary-100" />
  );
}

Arrow.Right = ArrowRight;
Arrow.Left = ArrowLeft;

export default Arrow;