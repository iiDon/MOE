import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
const Slider = () => {
  const SLIDERS = [
    "slider/SDGs.jpg",
    "slider/2030.jpg",
    "slider/icons.jpg",
    "slider/2023_icons.jpg",
  ];
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      dir="ltr"
      className="w-screen  "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {SLIDERS.map((_, index) => (
          <CarouselItem key={index}>
            <img
              src={_}
              alt="slider"
              className="w-full h-full object-contain"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Slider;
