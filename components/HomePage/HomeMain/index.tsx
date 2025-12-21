import HomeFilter from "./HomeFilter";
import ImagesCaroussel from "./ImagesCaroussel";
import Button from "@/components/ui/Button";
import LeadButton from "@/components/ui/LeadButton";

export default function HomeMain() {
  return (
    <main className="bg-[url(/reze-arc.png)] bg-no-repeat bg-cover relative flex pb-12 gap-52">
      <HomeFilter />
      <div className="flex-1 flex flex-col justify-between mt-16 z-10">
        <span className="flex gap-6 flex-col">
          <h1 className="text-emphasis font-bold w-[462px]">Entre no Universo dos Animes</h1>
          <p className="text-section-subtitle w-[462px]">
            Descubra resenhas, análises e recomendações das séries que você mais ama. Acompanhe cada detalhe do mundo anime de forma divertida e completa.
          </p>
        </span>
        <span>
          <LeadButton>Explorar Agora</LeadButton>
        </span>
      </div>
      <div className="flex-1 mt-16 z-10">
        <span className="flex h-full flex-col items-end">
          <span className="w-[465px]">
            <h2 className="text-right text-section-subtitle">Populares</h2>
            <h3 className="text-emphasis font-bold text-right">1. Chainsaw Man</h3>
            <p className="text-right text-section-subtitle mt-6">
              Acompanhe a jornada eletrizante de Denji enquanto ele enfrenta demônios e descobre o verdadeiro significado da luta pela sobrevivência.
            </p>
          </span>
          <span className="flex flex-1 flex-col items-end justify-between">
            <ImagesCaroussel />
            <Button>Veja mais</Button>
          </span>
        </span>
      </div>
    </main>
  );
}