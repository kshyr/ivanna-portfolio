"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { BsCaretRightFill, BsCaretLeftFill } from "react-icons/bs";

const images = ["/frame1.png", "/frame2.png", "/frame3.png"];

const xSpeed = 400;
const scaleFactor = 0.8;

export default function Carousel() {
  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const onPrevClick = () => {
    setDirection("left");
    setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const onNextClick = () => {
    setDirection("right");
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <motion.div className="max-w-md flex justify-center items-center gap-8 ">
      <CarouselButton onClick={onPrevClick} />
      <AnimatePresence mode="wait">
        <motion.div
          key={imageIndex}
          className={cn("bg-background p-8 rounded-[40px]", "aspect-video")}
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
      <CarouselButton onClick={onNextClick} flip />
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
