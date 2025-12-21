import LeadButton from "@/components/ui/LeadButton";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function HomeSectionOne() {
  return (
    <section className="flex items-center">
      <div className="flex flex-col justify-between">
        <span>
          <h2 className="text-section-title font-bold">
            Junte-se à Comunidade que Vive o Anime
          </h2>
          <h3 className="text-section-subtitle">
            Comunidade Viva
          </h3>
          <p className="text-paragraph mt-6 w-[462px]">
            Aqui não é só sobre assistir: é sobre trocar ideias, compartilhar teorias e viver cada aventura com outros fãs que entendem a paixão por animes.
          </p>
          <div className="flex gap-2.5 mt-6 flex-col">
            <span className="flex gap-1.5 items-center">
              <Sparkles className="text-primary-500" size={28} />
              <p>Descubra Novos Amigos</p>
            </span>
            <span className="flex gap-1.5 items-center">
              <Sparkles className="text-primary-500" size={28} />
              <p>Participe de Discussões</p>
            </span>
          </div>
        </span>
        <span className="mt-28">
          <LeadButton>Participar da comunidade</LeadButton>
        </span>
      </div>
      <div className="flex-1 flex justify-end">
        <Image src="/section-one-image.png" className="2xl:w-[756px] 2xl:h-[490px]" width={556} height={390} alt="" />
      </div>
    </section>
  );
}