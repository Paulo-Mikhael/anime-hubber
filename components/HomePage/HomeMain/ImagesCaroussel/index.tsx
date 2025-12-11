"use client";

import { theme } from "@/data/variables";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import styled from "styled-components";
import LinearFilter from "@/components/ui/LinearFilter";

const StyledSpan = styled.span`
  border-radius: calc(infinity * 1px);
  cursor: pointer;
  border-width: 1px;
  border-color: ${theme.colors.primary_750};
  padding: 8px;

  &:hover {
    border-color: ${theme.colors.primary_100};
  }

  i{
    color: ${theme.colors.primary_750};
  }
`;

export default function ImagesCaroussel() {
  return (
    <span>
      <div className="flex gap-5 w-[465px] mt-6 overflow-hidden relative">
        <LinearFilter linearDirection="left" blackOpacity={80} toPercentage={20} />
        <Image src="/reze-arc.png" width={179.2} height={112} alt="" className="border-2 border-primary-1000 rounded-[3px]" />
        <Image src="/dandadan.png" width={179.2} height={112} alt="" className="border-2 border-primary-1000 rounded-[3px]" />
        <Image src="/demon-slayer.png" width={179.2} height={112} alt="" className="border-2 border-primary-1000 rounded-[3px]" />
      </div>
      <div className="flex w-[465px] mt-6 justify-between">
        <span className="flex gap-2.5">
          <StyledSpan className="group">
            <MoveLeft className="text-primary-750 group-hover:text-primary-100" />
          </StyledSpan>
          <StyledSpan className="group">
            <MoveRight className="text-primary-750 group-hover:text-primary-100" />
          </StyledSpan>
        </span>
        <blockquote>
          Lorem ipsum dolor sit amet
        </blockquote>
      </div>
    </span>
  );
}