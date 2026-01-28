import { ReactNode } from "react";
import AllPostsMain from "./AllPostsMain";
import AllPostsAside from "./AllPostsAside";

function AllPostsPage({ children }: { children: ReactNode }) {
  return (
    <section className="flex gap-x-[130px] pt-40 w-full min-h-screen px-16 pb-16">
      {children}
    </section>
  );
}

AllPostsPage.Main = AllPostsMain;
AllPostsPage.Aside = AllPostsAside;

export default AllPostsPage;
