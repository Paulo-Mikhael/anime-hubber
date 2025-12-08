import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";

export default function PopularImages() {
  return (
    <span>
      <div className="flex gap-5 w-[465px] mt-6 overflow-hidden relative">
        <span className="absolute top-0 left-0 size-full bg-linear-to-l from-typo-0/80 to-20% to-[#132626]/20" />
        <Image src="/reze-arc.png" width={179.2} height={112} alt="" className="border-2 border-primary-1000 rounded-[3px]" />
        <Image src="/dandadan.png" width={179.2} height={112} alt="" className="border-2 border-primary-1000 rounded-[3px]" />
        <Image src="/demon-slayer.png" width={179.2} height={112} alt="" className="border-2 border-primary-1000 rounded-[3px]" />
      </div>
      <div className="flex w-[465px] mt-6 justify-between">
        <span className="flex gap-2.5">
          <span className="rounded-full cursor-pointer border border-primary-750 p-2 hover:border-primary-100 group">
            <MoveLeft className="text-primary-750 group-hover:text-primary-100" />
          </span>
          <span className="rounded-full cursor-pointer border border-primary-750 p-2 group">
            <MoveRight className="text-primary-750 group-hover:text-primary-100" />
          </span>
        </span>
        <p>
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </span>
  );
}