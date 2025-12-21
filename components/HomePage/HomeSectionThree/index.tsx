import Arrow from "@/components/ui/Arrow";
import LeadButton from "@/components/ui/LeadButton";
import Image from "next/image";

export default function HomeSectionThree() {
  return (
    <section className="flex items-center justify-between">
      <div>
        <span>
          <h2 className="text-section-title font-bold">Momentos Marcantes</h2>
          <h3 className="text-section-subtitle">Compartilhados pela Comunidade</h3>
        </span>
        <p className="text-paragraph w-[462px] mt-6 mb-[136px]">
          Assista aos clipes mais comentados, cenas épicas e momentos emocionantes capturados diretamente dos posts mais populares do blog. A comunidade compartilha o que faz cada anime inesquecível.
        </p>
        <LeadButton>
          Participar da Comunidade
        </LeadButton>
      </div>
      <div>
        <span className="grid grid-cols-3 gap-2">
          <figure className="relative flex items-center justify-center cursor-pointer w-[200px] h-[135px] col-end-3">
            <Image fill alt="" src="/erwin.png" />
            <span className="absolute inset-0 border-[3px] border-success" />
          </figure>
          <span className="relative flex items-center justify-center cursor-pointer w-[200px] h-[135px]">
            <Image fill alt="" src="/demon-slayer.png" />
            <span className="absolute inset-0 bg-black/60 border-[3px] border-primary-1000" />
            <img src="/play-button.png" className="absolute size-12" />
          </span>
          <span className="relative flex items-center justify-center cursor-pointer w-[200px] h-[135px]">
            <Image fill alt="" src="/reze-arc.png" />
            <span className="absolute inset-0 bg-black/60 border-[3px] border-primary-1000" />
            <img src="/play-button.png" className="absolute size-12" />
          </span>
          <span className="relative flex items-center justify-center cursor-pointer w-[200px] h-[135px]">
            <Image fill alt="" src="/dandadan.png" />
            <span className="absolute inset-0 bg-black/60 border-[3px] border-primary-1000" />
            <img src="/play-button.png" className="absolute size-12" />
          </span>
          <span className="relative flex items-center justify-center cursor-pointer w-[200px] h-[135px]">
            <Image fill alt="" src="/your-name-tori.png" />
            <span className="absolute inset-0 bg-black/60 border-[3px] border-primary-1000" />
            <img src="/play-button.png" className="absolute size-12" />
          </span>
        </span>
        <figcaption className="flex flex-col items-end mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <b className="text-success text-description">Lorem ipsum dolor sit amet, consectetur <span className="text-info">adipiscing elit.</span></b>
        </figcaption>
        <span className="flex justify-end mt-2.5">
          <Arrow>
            <Arrow.Right />
          </Arrow>
        </span>
      </div>
    </section>
  );
}