import { ReactNode } from "react";
import Header from "@/components/Header";

export default function AppScreensLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <>
      <Header>
        <Header.Default />
      </Header>
      {children}
    </>
  );
}