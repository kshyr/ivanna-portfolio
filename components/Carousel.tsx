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
    <motion.div className="flex justify-center items-center gap-8 ">
      <AnimatePresence mode="wait">
        <motion.div
          key={imageIndex}
          className={cn(
            "bg-background p-8 rounded-[40px]",
            "aspect-video",
            "md:min-w-[375px] md:min-h-[570px]",
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
  );
}

function DesktopCarousel({
  images,
  onPrev,
  onNext,
  imageIndex,
}: CarouselProps) {
  return (
    <motion.div className="max-w-md flex justify-center items-center gap-8 ">
      <CarouselButton onClick={onPrev} />
      <AnimatePresence mode="wait">
        <motion.div
          key={imageIndex}
          className={cn(
            "bg-background p-8 rounded-[40px]",
            "aspect-video",
            "xl:min-w-[934px] 2xl:min-h-[570px]",
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
      <CarouselButton onClick={onNext} flip />
    </motion.div>
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
        "z-10 absolute flex justify-center items-center w-[110px] h-[470px] bg-background drop-shadow-2xl",
        flip
          ? "rounded-r-[40px] rounded-l-[15px] right-0"
          : "rounded-l-[40px] rounded-r-[15px] left-0",
      )}
    >
      <motion.button
        className={cn(
          "h-20 w-20 bg-gradient-to-br rounded-full flex justify-center items-center active:scale-[0.9] active:shadow-none",
          "relative before:w-[82px] before:bg-foreground before:h-[82px] before:absolute before:-z-20 before:top-[-1px] before:left-[-1px]",
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
