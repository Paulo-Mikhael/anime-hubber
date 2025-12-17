import Button from "@/components/ui/Button";

export function NewsletterTextBox() {
  return (
    <form className="mt-6 mb-6 flex">
      <div className="w-[744px] h-[45px] bg-white rounded-[3px] border-2 border-primary-250">
        <input placeholder="Insira seu email" className="outline-none w-full h-full px-3.5 placeholder:text-typo-30 text-typo-16" />
      </div>
      <Button>
        Lorem ipsum
      </Button>
    </form>
  );
}