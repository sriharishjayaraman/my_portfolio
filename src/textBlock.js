import "./slider.css";
import { useEffect, useRef, useState } from "react";

function TextBlock() {
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailBorderRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    const nextDom = nextRef.current;
    const prevDom = prevRef.current;
    const carouselDom = carouselRef.current;
    const sliderDom = sliderRef.current;
    const thumbnailBorderDom = thumbnailBorderRef.current;
    const timeDom = timeRef.current;

    thumbnailBorderDom.appendChild(
      thumbnailBorderDom.querySelectorAll(".item")[0]
    );

    let timeRunning = 3000;
    let timeAutoNext = 7000;
    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    const showSlider = (type) => {
      let SliderItemsDom = sliderDom.querySelectorAll(".item");
      let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");

      if (type === "next") {
        sliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add("next");
      } else {
        sliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
        carouselDom.classList.add("prev");
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    };

    nextDom.onclick = () => {
      showSlider("next");
    };

    prevDom.onclick = () => {
      showSlider("prev");
    };
  }, []);
  return (
    <div id="textblock">
      <div class="carousel" ref={carouselRef}>
        <div class="list" ref={sliderRef}>
          <div class="item">
            <img src="https://raw.githubusercontent.com/HoanghoDev/slider_1/main/image/img1.jpg" />
            <div class="content">
              <div class="author">GiorgioGT</div>
              <div class="title">DESIGN SLIDER</div>
              <div class="topic">ANIMAL</div>
              <div class="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam. Explicabo,
                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                exercitationem eum aperiam illo illum laudantium?
              </div>
              <div class="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div class="item">
            <img src="https://raw.githubusercontent.com/HoanghoDev/slider_1/main/image/img2.jpg" />
            <div class="content">
              <div class="author">giorgioGT</div>
              <div class="title">DESIGN SLIDER</div>
              <div class="topic">ANIMAL</div>
              <div class="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam. Explicabo,
                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                exercitationem eum aperiam illo illum laudantium?
              </div>
              <div class="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div class="item">
            <img src="https://raw.githubusercontent.com/HoanghoDev/slider_1/main/image/img3.jpg" />
            <div class="content">
              <div class="author">giorgioGT</div>
              <div class="title">DESIGN SLIDER</div>
              <div class="topic">ANIMAL</div>
              <div class="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam. Explicabo,
                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                exercitationem eum aperiam illo illum laudantium?
              </div>
              <div class="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div class="item">
            <img src="https://raw.githubusercontent.com/HoanghoDev/slider_1/main/image/img4.jpg" />
            <div class="content">
              <div class="author">giorgioGT</div>
              <div class="title">DESIGN SLIDER</div>
              <div class="topic">ANIMAL</div>
              <div class="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam. Explicabo,
                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                exercitationem eum aperiam illo illum laudantium?
              </div>
              <div class="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
        <div class="thumbnail" ref={thumbnailBorderRef}>
          <div class="item">
            <img src="https://raw.githubusercontent.com/HoanghoDev/slider_1/main/image/img1.jpg" />
            <div class="content">
              <div class="title">Name Slider</div>
              <div class="description">Description</div>
            </div>
          </div>
          <div class="item">
            <img src="https://raw.githubusercontent.com/HoanghoDev/slider_1/main/image/img2.jpg" />
            <div class="content">
              <div class="title">Name Slider</div>
              <div class="description">Description</div>
            </div>
          </div>
          <div class="item">
            <img src="https://raw.githubusercontent.com/HoanghoDev/slider_1/main/image/img3.jpg" />
            <div class="content">
              <div class="title">Name Slider</div>
              <div class="description">Description</div>
            </div>
          </div>
          <div class="item">
            <img src="https://raw.githubusercontent.com/HoanghoDev/slider_1/main/image/img4.jpg" />
            <div class="content">
              <div class="title">Name Slider</div>
              <div class="description">Description</div>
            </div>
          </div>
        </div>

        <div class="arrows">
          <button id="prev" ref={prevRef}>
            {"<"}
          </button>
          <button id="next" ref={nextRef}>
            {">"}{" "}
          </button>
        </div>
        <div class="time" ref={timeRef}></div>
      </div>
    </div>
  );
}

export default TextBlock;
