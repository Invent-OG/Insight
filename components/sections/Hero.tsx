"use client";
import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import {
  HTMLMotionProps,
  MotionValue,
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import hero1 from "@/public/assets/hero1.webp";
import hero2 from "@/public/assets/hero2.webp";
import hero3 from "@/public/assets/hero3.webp";
import hero4 from "@/public/assets/hero4.webp";
import hero5 from "@/public/assets/hero5.webp";
import VerticalCutReveal from "@/fancy/components/text/vertical-cut-reveal";

const bentoGridVariants = cva(
  "relative grid gap-4 [&>*:first-child]:origin-top-right [&>*:nth-child(3)]:origin-bottom-right [&>*:nth-child(4)]:origin-top-right",
  {
    variants: {
      variant: {
        default: `
          grid-cols-4 grid-rows-[1fr_1fr_1fr]
          [&>*:first-child]:col-span-4 [&>*:first-child]:row-span-1
          [&>*:nth-child(2)]:col-span-2
          [&>*:nth-child(3)]:col-span-2
          [&>*:nth-child(4)]:col-span-2
          [&>*:nth-child(5)]:col-span-2
          md:grid-cols-8 md:grid-rows-[1fr_0.5fr_0.5fr_1fr]
          md:[&>*:first-child]:col-span-6 md:[&>*:first-child]:row-span-3
          md:[&>*:nth-child(2)]:col-span-2 md:[&>*:nth-child(2)]:row-span-2
          md:[&>*:nth-child(3)]:col-span-2 md:[&>*:nth-child(3)]:row-span-2
          md:[&>*:nth-child(4)]:col-span-3
          md:[&>*:nth-child(5)]:col-span-3
        `,
        threeCells: `grid-cols-2 grid-rows-2
          [&>*:first-child]:col-span-2`,
        fourCells: `grid-cols-3 grid-rows-2
          [&>*:first-child]:col-span-1
          [&>*:nth-child(2)]:col-span-2
          [&>*:nth-child(3)]:col-span-2`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ContainerScrollContextValue {
  scrollYProgress: MotionValue<number>;
}
const ContainerScrollContext = React.createContext<
  ContainerScrollContextValue | undefined
>(undefined);
function useContainerScrollContext() {
  const context = React.useContext(ContainerScrollContext);
  if (!context) {
    throw new Error(
      "useContainerScrollContext must be used within a ContainerScroll Component"
    );
  }
  return context;
}
const ContainerScroll = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });
  return (
    <ContainerScrollContext.Provider value={{ scrollYProgress }}>
      <div
        ref={scrollRef}
        className={cn("relative min-h-screen w-full", className)}
        {...props}
      >
        {children}
      </div>
    </ContainerScrollContext.Provider>
  );
};

const BentoGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof bentoGridVariants>
>(({ variant, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(bentoGridVariants({ variant }), className)}
      {...props}
    />
  );
});
BentoGrid.displayName = "BentoGrid";

const BentoCell = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, style, ...props }, ref) => {
    const { scrollYProgress } = useContainerScrollContext();
    const translate = useTransform(scrollYProgress, [0.1, 0.9], ["-35%", "0%"]);
    const scale = useTransform(scrollYProgress, [0, 0.9], [0.5, 1]);

    return (
      <motion.div
        ref={ref}
        className={className}
        style={{ translate, scale, ...style }}
        {...props}
      />
    );
  }
);
BentoCell.displayName = "BentoCell";

const ContainerScale = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, style, ...props }, ref) => {
    const { scrollYProgress } = useContainerScrollContext();
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const position = useTransform(scrollYProgress, (pos) =>
      pos >= 0.6 ? "absolute" : "fixed"
    );
    return (
      <motion.div
        ref={ref}
        className={cn("left-1/2 top-1/2  size-fit", className)}
        style={{
          translate: "-50% -50%",
          scale,
          position,
          opacity,
          ...style,
        }}
        {...props}
      />
    );
  }
);
ContainerScale.displayName = "ContainerScale";

// Your default exported Hero component
const Hero = () => {
  return (
    <ContainerScroll className="bg-black text-white overflow-hidden relative ">
      <ContainerScale className="z-10 text-left md:text-center px-6 md:px-0">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-overused-grotesk font-bold uppercase tracking-wide text-primary flex flex-col space-y-2 sm:space-y-4">
          <div>
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.025}
              staggerFrom="first"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 21,
              }}
            >
              {`Achieve Your`}
            </VerticalCutReveal>
          </div>

          <div>
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.025}
              staggerFrom="last"
              reverse={true}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 21,
                delay: 0.5,
              }}
            >
              {`Abroad Study`}
            </VerticalCutReveal>
          </div>

          <div>
            <VerticalCutReveal
              splitBy="characters"
              staggerDuration={0.025}
              staggerFrom="center"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 21,
                delay: 1.1,
              }}
            >
              {`Dreams With Us`}
            </VerticalCutReveal>
          </div>
        </div>

        <div className="mt-8 hidden sm:flex justify-center items-center gap-4">
          <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-900 transition">
            Get Started
          </button>
          <button className="text-white font-semibold hover:underline">
            Learn more
          </button>
        </div>
      </ContainerScale>

      <BentoGrid className="z-0">
        <BentoCell className="rounded-xl overflow-hidden">
          <Image
            src={hero1}
            alt="Hero 1"
            width={800}
            height={600}
            className="w-full h-full object-cover rounded-xl"
          />
        </BentoCell>
        <BentoCell className="rounded-xl overflow-hidden">
          <Image
            src={hero2}
            alt="Hero 2"
            width={800}
            height={600}
            className="w-full h-full object-cover rounded-xl"
          />
        </BentoCell>
        <BentoCell className="rounded-xl overflow-hidden">
          <Image
            src={hero3}
            alt="Hero 3"
            width={800}
            height={600}
            className="w-full h-full object-cover rounded-xl"
          />
        </BentoCell>
        <BentoCell className="rounded-xl overflow-hidden">
          <Image
            src={hero4}
            alt="Hero 4"
            width={800}
            height={600}
            className="w-full h-full object-cover rounded-xl"
          />
        </BentoCell>
        <BentoCell className="rounded-xl overflow-hidden">
          <Image
            src={hero5}
            alt="Hero 5"
            width={800}
            height={600}
            className="w-full h-full object-cover rounded-xl"
          />
        </BentoCell>
      </BentoGrid>
    </ContainerScroll>
  );
};

export default Hero;
