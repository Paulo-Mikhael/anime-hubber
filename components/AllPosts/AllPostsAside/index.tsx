"use client"

import { useState } from "react";
import TextBox from "@/components/ui/TextBox";
import Button from "@/components/ui/Button";
import UserBox from "./UserBox";

export default function AllPostsAside() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleToggleExpand() {
    setIsExpanded((prev) => !prev);
  }

  const collapsedContainerClasses =
    "h-96 flex flex-col items-start overflow-hidden relative";
  const expandedContainerClasses =
    "flex flex-col items-start relative absolute top-0 left-0 w-full z-10 bg-secondary-50";

  return (
    <aside className="relative flex flex-col gap-y-6 w-96">
      <div
        className={isExpanded ? expandedContainerClasses : collapsedContainerClasses}
      >
        <p className="text-section-title font-bold mb-4">
          Lorem ipsum
        </p>
        <span className="w-full">
          <TextBox style="secondary" placeholder="Pesquisar..." />
        </span>
        <UserBox
          imageUrl="/user.png"
          alt="Imagem de usuário"
          text="Lorem ipsum dolor sit amet"
        />
        <UserBox
          imageUrl="/user.png"
          alt="Imagem de usuário"
          text="Lorem ipsum dolor sit amet"
        />
        <UserBox
          imageUrl="/user.png"
          alt="Imagem de usuário"
          text="Lorem ipsum dolor sit amet"
        />
        <UserBox
          imageUrl="/user.png"
          alt="Imagem de usuário"
          text="Lorem ipsum dolor sit amet"
        />
        <UserBox
          imageUrl="/user.png"
          alt="Imagem de usuário"
          text="Lorem ipsum dolor sit amet"
        />
        <UserBox
          imageUrl="/user.png"
          alt="Imagem de usuário"
          text="Lorem ipsum dolor sit amet"
        />
        <UserBox
          imageUrl="/user.png"
          alt="Imagem de usuário"
          text="Lorem ipsum dolor sit amet"
        />
        <UserBox
          imageUrl="/user.png"
          alt="Imagem de usuário"
          text="Lorem ipsum dolor sit amet"
        />
        <span className="absolute bottom-0 left-0 w-full flex items-center justify-center rounded-md bg-white/80">
          <Button style="secondary" variant="bordered" full onClick={handleToggleExpand}>
            {isExpanded ? "Ver Menos" : "Ver Mais"}
          </Button>
        </span>
      </div>
      <div className="bg-yellow-500 h-screen">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Yellow Square</h2>
          <p className="text-lg">
            This is some content to give height to the second row.
            The height will be determined by the content inside.
          </p>
        </div>
      </div>
    </aside>
  );
}

