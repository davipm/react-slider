import React, { useState } from "react";
import Slide from "./Slide";
import SliderControl from "./SliderControl";

function Slider({ slides, heading }) {
  const [current, setCurrent] = useState(0);

  function handlePreviousClick() {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  }

  function handleNextClick() {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  }

  function handleClick(index) {
    if (current !== index) {
      setCurrent(index);
    }
  }

  const headingId = `slider-heading__${heading
    .replace(/\s+/g, "-")
    .toLowerCase()}`;
  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`,
  };

  return (
    <div className="slider" aria-labelledby={headingId}>
      <ul className="slider__wrapper" style={wrapperTransform}>
        <h3 id={headingId} className="visually-hidden">
          {heading}
        </h3>

        {slides.map((slide) => (
          <Slide
            key={slide.index}
            slides={slide}
            current={current}
            handleSlideClick={handleClick}
          />
        ))}
      </ul>

      <div className="slider__controls">
        <SliderControl
          title="Go to previous slide"
          type="previous"
          handleClick={handlePreviousClick}
        />
        <SliderControl
          title="Go to next slide"
          type="next"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}

export default Slider;
