import { ReactNode } from "react";
import HomeMain from "./HomeMain";
import HomeSectionOne from "./HomeSectionOne";

function HomePage({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}

HomePage.Main = HomeMain;
HomePage.SectionOne = HomeSectionOne;

export default HomePage;