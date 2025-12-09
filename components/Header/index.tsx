import Button from "../ui/Button";
import TextBox from "../ui/TextBox";

export default function Header() {
  return (
    <header className="flex justify-between absolute top-0 left-0 z-10 w-full py-12 px-40">
      <TextBox filterButton placeholder="Encontrar posts..." />
      <nav className="flex items-center gap-6">
        <Button variant="bordered">Lorem ipsum</Button>
        <Button variant="bordered">Lorem ipsum</Button>
        <Button variant="bordered">Lorem ipsum</Button>
        <Button>Login</Button>
      </nav>
    </header>
  );
}