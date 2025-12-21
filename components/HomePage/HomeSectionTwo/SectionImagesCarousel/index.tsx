import Arrow from "@/components/ui/Arrow";
import Button from "@/components/ui/Button";
import Images from "./Images";

export default function SectionImagesCarousel() {
  return (
    <span className="flex flex-col items-center justify-center gap-10">
      <Images>
        <Images.MostLeftImage imageUrl="/your-name-tori.png" />
        <Images.LeftImage imageUrl="/demon-slayer.png" />
        <Images.CenterImage />
        <Images.RightImage imageUrl="/reze-arc.png" />
        <Images.MostRightImage imageUrl="/dandadan.png" />
      </Images>
      <div className="flex gap-3">
        <Arrow>
          <Arrow.Left />
        </Arrow>
        <Button variant="ghost">
          Veja Mais
        </Button>
        <Arrow>
          <Arrow.Right />
        </Arrow>
      </div>
    </span>
  );
}