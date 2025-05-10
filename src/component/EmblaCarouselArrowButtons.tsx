import React, { useCallback, useEffect, useState } from "react";
import { UseEmblaCarouselType } from "embla-carousel-react";

export const usePrevNextButtons = (
  emblaApi: UseEmblaCarouselType | undefined
) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: UseEmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const PrevButton = (props: ButtonProps) => {
  const { ...restProps } = props;

  return (
    <div className="flex h-[228px] cursor-pointer items-start" {...restProps}>
      <svg
        width="1em"
        height="1em"
        fill="#ffffff"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="size-10"
      >
        <path
          d="M15.5 19L8 12L15.5 5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export const NextButton = (props: ButtonProps) => {
  const { ...restProps } = props;

  return (
    <div className="flex h-[228px] cursor-pointer items-start" {...restProps}>
      <svg
        width="1em"
        height="1em"
        fill="#ffffff"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="size-10"
      >
        <path
          d="M8.5 5L16 12L8.5 19"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};
