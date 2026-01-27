import clsx from "clsx";
import Button from "../ui/Button";
import TextBox from "../ui/TextBox";
import { ReactNode } from "react";

function Header({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}

function HomeHeader() {
  return (
    <header className="flex justify-between absolute top-0 left-0 z-10 w-full py-12 px-40">
      <TextBox filterButton placeholder="Encontrar posts..." />
      <nav className="flex items-center gap-6">
        <Button variant="bordered">Newsletter</Button>
        <Button variant="bordered">Populares</Button>
        <Button variant="bordered">Explorar Posts</Button>
        <Button>Login</Button>
      </nav>
    </header>
  );
}

function DefaultHeader() {
  return (
    <header className={
      clsx(
        "flex justify-between absolute top-0 left-0 z-10 w-full py-8 px-40 bg-[#02090E]/90",
      )
    }>
      <TextBox style="secondary" filterButton placeholder="Encontrar posts..." />
      <nav className="flex items-center gap-6">
        <Button style="secondary" variant="bordered">Newsletter</Button>
        <Button style="secondary" variant="bordered">Populares</Button>
        <Button style="secondary" variant="bordered">Explorar Posts</Button>
        <Button style="secondary">Login</Button>
      </nav>
    </header>
  );
}

Header.Home = HomeHeader;
Header.Default = DefaultHeader;

export default Header;