import { ReactNode } from "react";
import HomeMain from "./HomeMain";
import HomeSectionOne from "./HomeSectionOne";
import HomeSectionTwo from "./HomeSectionTwo";

function HomePage({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}

HomePage.Main = HomeMain;
HomePage.SectionOne = HomeSectionOne;
HomePage.SectionTwo = HomeSectionTwo;

export default HomePage;