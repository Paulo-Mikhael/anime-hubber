import { Facebook, Instagram, Mail, MoveUp, Youtube } from "lucide-react";
import { NewsletterTextBox } from "./NewsletterTextBox";
import RoundedButton from "./RoundedButton";

export default function HomeFooter() {
  return (
    <footer className="bg-primary-1000 py-[60px] flex flex-col items-center">
      <span>
        <h2 className="text-section-title font-bold text-typo-16">Lorem ipsum dolor sit amet</h2>
        <h3 className="text-section-subtitle text-center text-typo-16">Lorem ipsum dolor sit amet</h3>
      </span>
      <NewsletterTextBox />
      <span className="flex gap-2.5">
        <RoundedButton Icon={Instagram} />
        <RoundedButton Icon={Mail} />
        <RoundedButton Icon={Facebook} />
        <RoundedButton Icon={Youtube} />
      </span>
      <span className="w-[928px] flex mt-10 mb-6 flex-col">
        <span className="h-[3px] w-full bg-primary-100 mb-6" />
        <span className="flex justify-between">
          <p className="text-typo-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <ul className="text-typo-16 flex gap-6">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </span>
      </span>
      <RoundedButton Icon={MoveUp} />
    </footer>
  );
}