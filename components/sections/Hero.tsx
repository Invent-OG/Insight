"use client";
import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import {
  HTMLMotionProps,
  MotionValue,
  motion,
  useScroll,
  useTransform,
  useAnimation,
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
        className={cn(
          "relative min-h-screen w-full overflow-scroll",
          className
        )}
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

    const translateX = useTransform(
      scrollYProgress,
      [0.1, 0.9],
      ["-35%", "0%"]
    );
    const scale = useTransform(scrollYProgress, [0, 0.9], [0.5, 1]);

    return (
      <motion.div
        ref={ref}
        className={className}
        style={{
          x: translateX,
          scale,
          ...style,
        }}
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
        className={cn("left-1/2 top-1/2 size-fit", className)}
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

const AnimatedBackground = () => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <motion.div
      aria-hidden="true"
      className="absolute  z-10 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900"
      style={{ backgroundSize: "200% 200%", height: "100%" }}
      animate={controls}
    />
  );
};

const Hero = () => {
  return (
    <ContainerScroll className="bg-black overflow-hidden relative">
      {/* Animated Background */}
      {/* <AnimatedBackground /> */}

      <Image
        src={hero2}
        alt="Hero 1"
        className="absolute w-full h-full object-cover opacity-10"
        width={800}
        height={600}
      />

      <ContainerScale className="z-10 md:text-center px-6 md:px-0">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-overused-grotesk font-bold tracking-wide text-white flex flex-col space-y-2 sm:space-y-4">
          {/* First Line */}
          <div className="flex flex-wrap justify-center gap-x-2">
            <div className="text-primary">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.025}
                staggerFrom="first"
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 21,
                }}
              >
                {"Achieve"}
              </VerticalCutReveal>
            </div>
            <div className="text-white">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.025}
                staggerFrom="first"
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 21,
                }}
              >
                {"Your"}
              </VerticalCutReveal>
            </div>
          </div>

          {/* Second Line */}
          <div className="flex flex-wrap justify-center gap-x-2">
            <VerticalCutReveal
              splitBy="words"
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
              {"Abroad"}
            </VerticalCutReveal>
            <VerticalCutReveal
              splitBy="words"
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
              {"Study"}
            </VerticalCutReveal>
          </div>

          {/* Third Line */}
          <div className="flex flex-wrap justify-center gap-x-2">
            <div className="text-primary">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.025}
                staggerFrom="center"
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 21,
                  delay: 1.1,
                }}
              >
                {"Dreams"}
              </VerticalCutReveal>
            </div>

            <div className="text-white">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.025}
                staggerFrom="center"
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 21,
                  delay: 1.1,
                }}
              >
                {"With"}
              </VerticalCutReveal>
            </div>

            <div className="text-white">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.025}
                staggerFrom="center"
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 21,
                  delay: 1.1,
                }}
              >
                {"Us"}
              </VerticalCutReveal>
            </div>
          </div>
        </div>
      </ContainerScale>

      <BentoGrid className="z-0">
        <BentoCell className="rounded-xl overflow-hidden">
          <Image
            src={hero2}
            alt="Hero 1"
            width={800}
            height={600}
            className="w-full h-full object-cover rounded-xl"
          />
        </BentoCell>
        <BentoCell className="rounded-xl overflow-hidden">
          <Image
            src={hero1}
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
