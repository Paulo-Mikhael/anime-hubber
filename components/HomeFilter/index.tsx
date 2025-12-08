import LinearFilter from "../LinearFilter";

export default function HomeFilter() {
  return (
    <>
      <LinearFilter linearDirection="right" />
      <LinearFilter linearDirection="down" blackOpacity={60} />
      <span className="size-full bg-[#087050]/40 absolute top-0 left-0 z-0" />
    </>
  )
}