"use client";
import { useBreakpoint } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { BsCaretRightFill, BsCaretLeftFill } from "react-icons/bs";

const xSpeed = 400;
const scaleFactor = 0.8;

export default function Carousel({ images }: { images: string[] }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const onPrev = () => {
    setDirection("left");
    setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const onNext = () => {
    setDirection("right");
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  const { isBelowMd } = useBreakpoint("md");

  return isBelowMd ? (
    <MobileCarousel
      images={images}
      imageIndex={imageIndex}
      onPrev={onPrev}
      onNext={onNext}
    />
  ) : (
    <DesktopCarousel
      images={images}
      imageIndex={imageIndex}
      onPrev={onPrev}
      onNext={onNext}
    />
  );
}

type CarouselProps = {
  images: string[];
  imageIndex: number;
  onPrev: () => void;
  onNext: () => void;
};

function MobileCarousel({ images, onPrev, onNext, imageIndex }: CarouselProps) {
  return (
    <div
      className={cn(
        "grid gap-8 bg-foreground text-background w-full place-items-center py-10",
        "relative before:w-screen before:bg-foreground before:h-full before:absolute before:-z-20",
      )}
    >
      <motion.div className="min-w-full flex justify-center items-center gap-8 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={imageIndex}
            className={cn(
              "bg-background p-8 rounded-[40px]",
              "aspect-auto h-auto",
              "min-w-full sm:min-w-[350px] md:min-w-[500px] lg:min-w-[700px] xl:min-w-[900px] 2xl:min-w-[970px]",
            )}
          >
            <motion.img
              src={images[imageIndex]}
              className="w-full h-full"
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
              }}
              transition={{
                type: "tween",
                duration: 0.4,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function DesktopCarousel({
  images,
  onPrev,
  onNext,
  imageIndex,
}: CarouselProps) {
  return (
    <div
      className={cn(
        "grid gap-8 bg-foreground text-background w-full place-items-center py-10 px-24 ",
        "relative before:w-screen before:bg-foreground before:h-full before:absolute before:-z-20",
      )}
    >
      <motion.div className="max-w-md flex justify-center items-center gap-8 ">
        <CarouselButton onClick={onPrev} />
        <motion.div
          key={imageIndex}
          className={cn(
            "bg-background p-4 xl:p-8 rounded-2xl xl:rounded-[40px]",
            "aspect-auto h-auto",
            "min-w-[500px] md:min-w-[500px] lg:min-w-[700px] xl:min-w-[900px] 2xl:min-w-[970px]",
          )}
        >
          <AnimatePresence>
            <motion.img
              src={images[imageIndex]}
              className="w-full h-full min-h-[200px] lg:min-h-[350px] xl:min-h-[500px]"
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
              }}
              transition={{
                type: "tween",
                duration: 0.4,
                ease: "easeInOut",
              }}
            />
          </AnimatePresence>
        </motion.div>
        <CarouselButton onClick={onNext} flip />
      </motion.div>
    </div>
  );
}

function CarouselButton({
  flip = false,
  onClick,
}: {
  flip?: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={cn(
        "z-10 absolute flex justify-center items-center w-[70px] h-[220px] lg:w-[100px] lg:h-[330px] xl:w-[110px] xl:h-[470px] bg-background drop-shadow-2xl",
        flip
          ? "rounded-r-[40px] rounded-l-[15px] right-0"
          : "rounded-l-[40px] rounded-r-[15px] left-0",
      )}
    >
      <motion.button
        className={cn(
          "h-10 w-10 lg:h-20 lg:w-20 bg-gradient-to-br rounded-full flex justify-center items-center active:scale-[0.9] active:shadow-none",
          "relative before:w-[42px] before:h-[42px] lg:before:w-[82px] lg:before:h-[82px]  before:bg-foreground  before:absolute before:-z-20 before:top-[-1px] before:left-[-1px]",
          "before:rounded-full before:bg-gradient-to-br",
          flip
            ? "before:from-background before:to-muted-foreground"
            : "before:from-muted-foreground before:to-background",
          flip
            ? "from-background to-[#1d1d1d]"
            : "from-[#1d1d1d] to-background",
        )}
        onClick={onClick}
      >
        <ButtonIcon flip={flip} />
      </motion.button>
    </div>
  );
}

function ButtonIcon({ flip }: { flip: boolean }) {
  const caretTw = cn("fill-foreground");
  return flip ? (
    <BsCaretRightFill size={32} className={caretTw} />
  ) : (
    <BsCaretLeftFill size={32} className={caretTw} />
  );
}
