import React, { useRef } from "react";

function Slide({ slides, current, handleSlideClick }) {
  const slide = useRef(null);
  let classNames = "slide";

  function handleMouseMove(event) {
    const el = slide.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty(
      "--x",
      event.clientX - (r.left + Math.floor(r.width / 2))
    );
    el.style.setProperty(
      "--y",
      event.clientY - (r.top + Math.floor(r.height / 2))
    );
  }

  function handleMouseLeave() {
    slide.current.style.setProperty("--x", "0");
    slide.current.style.setProperty("--y", "0");
  }

  function handleClick() {
    handleSlideClick(slides.index);
  }

  function imageLoad(event) {
    event.target.style.opacity = 1;
  }

  if (current === slides.index) {
    classNames += " slide--current";
  } else if (current - 1 === slides.index) {
    classNames += " slide--previous";
  } else if (current + 1 === slides.index) {
    classNames += " slide--next";
  }

  return (
    <li
      ref={slide}
      className={classNames}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide__image-wrapper">
        <img
          className="slide__image"
          src={slides.src}
          alt={slides.headline}
          onLoad={imageLoad}
        />
      </div>

      <article className="slide__content">
        <h3 className="slide__headline">{slides.headline}</h3>
        <button className="slide__action btn">{slides.button}</button>
      </article>
    </li>
  );
}

export default Slide;
