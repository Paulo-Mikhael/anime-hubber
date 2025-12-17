import { LucideIcon } from "lucide-react";

export default function RoundedButton({ Icon }: { Icon: LucideIcon }) {
  return (
    <button className="p-2.5 bg-primary-250 rounded-full cursor-pointer group hover:bg-primary-100">
      <Icon className="group-hover:animate-pulse" />
    </button>
  );
}