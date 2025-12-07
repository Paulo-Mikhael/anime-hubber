import TextBox from "@/components/TextBox";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <span className="w-[500px] gap-2.5 flex flex-col items-center justify-center">
        <TextBox filterButton={true} labelText="Hello World" />
      </span>
    </div>
  );
}
