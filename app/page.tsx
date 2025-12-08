import Button from "@/components/Button";
import HomeFilter from "@/components/HomeFilter";
import LeadButton from "@/components/LeadButton";
import PopularImages from "@/components/PopularImages";

export default function Home() {
  return (
    <main className="w-full h-screen bg-[url(/reze-arc.png)] bg-no-repeat bg-cover relative flex pb-12 gap-52">
      <HomeFilter />
      <div className="flex-1 flex flex-col justify-between mt-16 z-10">
        <span className="flex gap-6 flex-col">
          <h1 className="text-emphasis font-bold w-[462px]">Lorem ipsum dolor sit amet</h1>
          <p className="text-section-subtitle w-[462px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum metus sed nulla vehicula, vitae sodales ligula vestibulum.</p>
        </span>
        <span>
          <LeadButton>Lorem ipsum</LeadButton>
        </span>
      </div>
      <div className="flex-1 mt-16 z-10">
        <span className="flex h-full flex-col items-end">
          <h2 className="w-[465px]">
            <p className="text-right text-section-subtitle">Populares</p>
            <p className="text-emphasis font-bold text-right">1. Chainsaw Man</p>
            <p className="text-right text-section-subtitle mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum metus sed nulla vehicula, vitae sodales ligula vestibulum. Cras quis elementum leo.
            </p>
          </h2>
          <span className="flex flex-1 flex-col items-end justify-between">
            <PopularImages />
            <Button>Lorem ipsum</Button>
          </span>
        </span>
      </div>
    </main>
  );
}
