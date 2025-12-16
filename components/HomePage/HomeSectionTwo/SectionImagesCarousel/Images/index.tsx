import Tag from "@/components/ui/Tag";
import clsx from "clsx";
import { TagIcon } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

function Images({ children }: { children: ReactNode }) {
  return (
    <span className="flex items-center gap-6 relative">
      {children}
    </span>
  );
}

type ImagePositions = "MostLeft" | "Left" | "Right" | "MostRight"

function MaskedImage(position: ImagePositions) {
  return ({ imageUrl }: { imageUrl: string }) => {

    return (
      <>
        <div style={{ backgroundImage: `url(${imageUrl})`, }} className={clsx(
          "w-[558px] h-[389px] bg-cover rounded-[28px] mask-[url(/mask.svg)] mask-cover mask-no-repeat absolute top-1.5",
          position == "Left" && "right-40 z-1",
          position == "MostLeft" && "right-80 z-0",
          position == "Right" && "left-40 scale-x-[-1] z-1",
          position == "MostRight" && "left-80 scale-x-[-1] z-0",
        )}>
          <span className="absolute inset-0 bg-black/60" />
        </div>
      </>
    );
  };
}

function CenterImage() {
  return (
    <span className="flex flex-col items-start gap-6 z-10">
      <div className="relative flex items-end">
        <Image width={558} height={389} alt="" src="/your-name-tori.png" className="rounded-[28px]" />
        <span className="absolute m-6 left-0 right-0 flex flex-col gap-2.5 z-2">
          <Image width={58} height={58} alt="" src="/user.png" className="rounded-full" />
          <span className="h-24 overflow-scroll scrollbar flex flex-col">
            <p className="text-paragraph">Lorem ipsum dolor sit amet</p>
            <p className="text-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula quam sed metus placerat, et posuere velit elementum. Curabitur ultrices aliquet odio nec convallis. Suspendisse potenti. Vivamus rhoncus purus ac feugiat condimentum. Fusce ac urna faucibus, iaculis eros ac, sagittis enim.
            </p>
          </span>
        </span>
        <span className="absolute bg-black/30 inset-0" />
      </div>
      <Tag>
        <Tag.Element>
          <TagIcon />
        </Tag.Element>
        <Tag.Element>
          <p>Lorem isum dolor</p>
        </Tag.Element>
        <Tag.Element>
          <p>Lorem isum dolor</p>
        </Tag.Element>
        <Tag.Element>
          <p>Lorem isum dolor</p>
        </Tag.Element>
      </Tag>
    </span>
  );
}

Images.MostLeftImage = MaskedImage("MostLeft");
Images.LeftImage = MaskedImage("Left");
Images.CenterImage = CenterImage;
Images.RightImage = MaskedImage("Right");
Images.MostRightImage = MaskedImage("MostRight");

export default Images;