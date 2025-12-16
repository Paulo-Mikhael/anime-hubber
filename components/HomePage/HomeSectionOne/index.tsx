import LeadButton from "@/components/ui/LeadButton";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function HomeSectionOne() {
  return (
    <section className="flex items-center">
      <div className="flex flex-col justify-between">
        <span>
          <h2 className="text-section-title font-bold">
            Lorem ipsum dolor sit amet
          </h2>
          <h3 className="text-section-subtitle">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="text-paragraph mt-6 w-[462px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel auctor erat. Quisque accumsan volutpat elit, id blandit nisl ornare eu. Ut laoreet facilisis rhoncus. Integer eget ex pharetra, mattis nulla ut, bibendum urna.
          </p>
          <div className="flex gap-2.5 mt-6 flex-col">
            <span className="flex gap-1.5">
              <Sparkles className="text-primary-500" size={28} />
              <p>Lorem ipsum dolor sit amet</p>
            </span>
            <span className="flex gap-1.5">
              <Sparkles className="text-primary-500" size={28} />
              <p>Lorem ipsum dolor sit amet</p>
            </span>
          </div>
        </span>
        <span className="mt-28">
          <LeadButton>Lorem ipsum</LeadButton>
        </span>
      </div>
      <div className="flex-1 flex justify-end">
        <Image src="/section-one-image.png" className="2xl:w-[756px] 2xl:h-[490px]" width={556} height={390} alt="" />
      </div>
    </section>
  );
}