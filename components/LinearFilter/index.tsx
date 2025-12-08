import clsx from "clsx";

const blackStyle = {
  opacity: {
    0: "from-black",
    10: "from-black/10",
    20: "from-black/20",
    30: "from-black/30",
    40: "from-black/40",
    50: "from-black/50",
    60: "from-black/60",
    70: "from-black/70",
    80: "from-black/80",
    90: "from-black/90",
  },
};
const linearStyle = {
  direction: {
    "right": "bg-linear-to-r",
    "left": "bg-linear-to-l",
    "up": "bg-linear-to-t",
    "down": "bg-linear-to-b"
  }
}
const toStyle = {
  percentageStop: {
    0: "",
    10: "to-10%",
    20: "to-20%",
    30: "to-30%",
    40: "to-40%",
    50: "to-50%",
    60: "to-60%",
    70: "to-70%",
    80: "to-80%",
    90: "to-90%",
  }
}

type PercentageBreakpoints = 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;
type LinearDirection = "right" | "left" | "up" | "down";

export default function LinearFilter({ blackOpacity = 0, toPercentage = 0, linearDirection }: { blackOpacity?: PercentageBreakpoints, toPercentage?: PercentageBreakpoints, linearDirection: LinearDirection }) {
  const black = blackStyle.opacity[blackOpacity];
  const linear = linearStyle.direction[linearDirection];

  return (
    <span
      className={
        clsx(
          "size-full bg-linear-to-b z-1 absolute top-0 left-0 to-[#132626]/20",
          blackStyle.opacity[blackOpacity],
          linearStyle.direction[linearDirection],
          toStyle.percentageStop[toPercentage]
        )
      }
    />
  );
}