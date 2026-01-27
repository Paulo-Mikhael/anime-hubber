import Arrow from "@/components/ui/Arrow";
import LeadButton from "@/components/ui/LeadButton";
import Videos from "./Videos";
import posts from "@/data/posts";

export default function HomeSectionThree() {
  return (
    <section className="flex items-center justify-between w-full h-screen px-40">
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
        <Videos videos={[
          {
            ...posts[0].videos![0],
            title: posts[0].title,
            authorName: posts[0].author
          },
          {
            ...posts[1].videos![0],
            title: posts[1].title,
            authorName: posts[1].author
          },
          {
            ...posts[2].videos![0],
            title: posts[2].title,
            authorName: posts[2].author
          },
          {
            ...posts[3].videos![0],
            title: posts[3].title,
            authorName: posts[3].author
          },
          {
            ...posts[4].videos![0],
            title: posts[4].title,
            authorName: posts[4].author
          },
        ]} />
        <span className="flex justify-end mt-2.5">
          <Arrow>
            <Arrow.Right />
          </Arrow>
        </span>
      </div>
    </section>
  );
}