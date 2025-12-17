import { ReactNode } from "react";
import HomeMain from "./HomeMain";
import HomeSectionOne from "./HomeSectionOne";
import HomeSectionTwo from "./HomeSectionTwo";
import HomeSectionThree from "./HomeSectionThree";

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
HomePage.SectionThree = HomeSectionThree;

export default HomePage;