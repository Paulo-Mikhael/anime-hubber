import HomeFilter from "./HomeFilter";
import LeadButton from "@/components/ui/LeadButton";
import PopularPosts from "./PopularPosts";

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
        <PopularPosts />
      </div>
    </main>
  );
}