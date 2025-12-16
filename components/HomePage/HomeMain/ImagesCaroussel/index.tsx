import Image from "next/image";
import LinearFilter from "@/components/ui/LinearFilter";
import Arrow from "@/components/ui/Arrow";

export default function ImagesCaroussel() {
  return (
    <span>
      <div className="flex gap-5 w-[465px] mt-6 overflow-hidden relative">
        <LinearFilter linearDirection="left" blackOpacity={80} toPercentage={20} />
        <Image src="/reze-arc.png" width={179.2} height={112} alt="" className="border-2 border-primary-1000 rounded-[3px]" />
        <Image src="/dandadan.png" width={179.2} height={112} alt="" className="border-2 border-primary-1000 rounded-[3px]" />
        <Image src="/demon-slayer.png" width={179.2} height={112} alt="" className="border-2 border-primary-1000 rounded-[3px]" />
      </div>
      <div className="flex w-[465px] mt-6 justify-between">
        <span className="flex gap-2.5">
          <Arrow>
            <Arrow.Left />
          </Arrow>
          <Arrow>
            <Arrow.Right />
          </Arrow>
        </span>
        <blockquote>
          Lorem ipsum dolor sit amet
        </blockquote>
      </div>
    </span>
  );
}