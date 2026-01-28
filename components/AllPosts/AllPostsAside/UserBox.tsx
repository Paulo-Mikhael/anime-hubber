import Image from "next/image";

interface UserBoxProps {
  imageUrl: string;
  alt: string;
  text: string;
}

export default function UserBox({ imageUrl, alt, text }: UserBoxProps) {
  return (
    <div className="w-full flex items-center gap-2 bg-secondary-100/80 border border-secondary-1000 rounded-md p-2 mt-4">
      <Image
        src={imageUrl}
        alt={alt}
        width={40}
        height={40}
        className="rounded-full border border-secondary-1000"
      />
      <p className="text-paragraph">{text}</p>
    </div>
  );
}
