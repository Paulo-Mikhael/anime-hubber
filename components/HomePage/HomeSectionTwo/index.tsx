import SectionImagesCarousel from "./SectionImagesCarousel";

export default function HomeSectionTwo() {
  return (
    <section className="flex items-center justify-center flex-col gap-6">
      <span className="flex items-center flex-col">
        <h2 className="text-section-title font-bold">
          Histórias que Marcam
        </h2>
        <h3 className="text-section-subtitle">
          Reviva momentos inesquecíveis de clássicos e lançamentos recentes.
        </h3>
      </span>
      <SectionImagesCarousel />
    </section>
  );
}