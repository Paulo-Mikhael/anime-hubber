import { ReactNode } from "react";
import HomeMain from "./HomeMain";
import HomeSectionOne from "./HomeSectionOne";
import HomeSectionTwo from "./HomeSectionTwo";
import HomeSectionThree from "./HomeSectionThree";
import HomeFooter from "./HomeFooter";

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
HomePage.Footer = HomeFooter;

export default HomePage;