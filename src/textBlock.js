import React, { useEffect } from "react";
import imagesLoaded from "imagesloaded";
import { gsap } from "gsap";
import amandarya from "./images/amandarya.png";

import "./slider.css";

function TextBlock() {
  useEffect(() => {
    const buttons = {
      prev: document.querySelector(".btn--left"),
      next: document.querySelector(".btn--right"),
    };
    const cardsContainerEl = document.querySelector(".cards__wrapper");
    const appBgContainerEl = document.querySelector(".app__bg");
    const cardInfosContainerEl = document.querySelector(".info__wrapper");

    const textData = [
      {
        name: "Machu Pichu",
        location: "Peru",
        description: "Adventure is never far away",
      },
      {
        name: "Chamonix",
        location: "France",
        description: "Let your dreams come true",
      },
      {
        name: "Music Player",
        location: "Amandarya",
        description: "Web Music Player made using ReactJS",
      },
    ];

    const init = () => {
      const tl = gsap.timeline();
      tl.to(cardsContainerEl.children, {
        delay: 0.15,
        duration: 0.5,
        stagger: {
          ease: "power4.inOut",
          from: "right",
          amount: 0.1,
        },
        "--card-translateY-offset": "0%",
      })
        .to(
          cardInfosContainerEl
            .querySelector(".current--info")
            .querySelectorAll(".text"),
          {
            delay: 0.5,
            duration: 0.4,
            stagger: 0.1,
            opacity: 1,
            translateY: 0,
          }
        )
        .to(
          [buttons.prev, buttons.next],
          {
            duration: 0.4,
            opacity: 1,
            pointerEvents: "all",
          },
          "-=0.4"
        );
    };

    const waitForImages = () => {
      const images = [...document.querySelectorAll("img")];
      const totalImages = images.length;
      let loadedImages = 0;
      const loaderEl = document.querySelector(".loader span");

      images.forEach((image) => {
        imagesLoaded(image, (instance) => {
          if (instance.isComplete) {
            loadedImages++;
            let loadProgress = loadedImages / totalImages;

            gsap.to(loaderEl, {
              duration: 1,
              scaleX: loadProgress,
              backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%)`,
            });

            if (totalImages === loadedImages) {
              gsap
                .timeline()
                .to(".loading__wrapper", {
                  duration: 0.8,
                  opacity: 0,
                  pointerEvents: "none",
                })
                .call(() => init());
            }
          }
        });
      });
    };

    const swapCards = (direction) => {
      const currentCardEl = cardsContainerEl.querySelector(".current--card");
      const previousCardEl = cardsContainerEl.querySelector(".previous--card");
      const nextCardEl = cardsContainerEl.querySelector(".next--card");

      let currentBgImageEl = appBgContainerEl.querySelector(".current--image");
      let previousBgImageEl =
        appBgContainerEl.querySelector(".previous--image");
      let nextBgImageEl = appBgContainerEl.querySelector(".next--image");

      gsap.to([buttons.prev, buttons.next], {
        duration: 0.2,
        opacity: 0.5,
        pointerEvents: "none",
      });

      gsap.to(currentCardEl.querySelectorAll(".text"), {
        duration: 0.4,
        stagger: 0.1,
        translateY: "-120px",
        opacity: 0,
      });

      gsap.to(currentBgImageEl, {
        duration: 0.4,
        opacity: 0,
      });

      gsap.to(
        direction === "right"
          ? nextCardEl.querySelectorAll(".text")
          : previousCardEl.querySelectorAll(".text"),
        {
          duration: 0.4,
          stagger: 0.1,
          translateY: "0px",
          opacity: 1,
        }
      );

      gsap.to(direction === "right" ? nextBgImageEl : previousBgImageEl, {
        duration: 0.4,
        opacity: 1,
      });

      setTimeout(() => {
        if (direction === "right") {
          currentCardEl.classList.remove("current--card");
          previousCardEl.classList.remove("previous--card");
          nextCardEl.classList.remove("next--card");
          currentBgImageEl.classList.remove("current--image");
          previousBgImageEl.classList.remove("previous--image");
          nextBgImageEl.classList.remove("next--image");

          currentCardEl.style.zIndex = "50";
          currentBgImageEl.style.zIndex = "-2";

          previousCardEl.style.zIndex = "20";
          nextCardEl.style.zIndex = "30";

          nextBgImageEl.style.zIndex = "-1";

          currentCardEl.classList.add("previous--card");
          previousCardEl.classList.add("next--card");
          nextCardEl.classList.add("current--card");

          currentBgImageEl.classList.add("previous--image");
          previousBgImageEl.classList.add("next--image");
          nextBgImageEl.classList.add("current--image");

          // Update text
          const currentIndex = textData.findIndex(
            (item) => item.name === currentCardEl.dataset.name
          );
          const nextIndex =
            currentIndex === textData.length - 1 ? 0 : currentIndex + 1;
          updateText(nextIndex);
        } else if (direction === "left") {
          currentCardEl.classList.remove("current--card");
          previousCardEl.classList.remove("previous--card");
          nextCardEl.classList.remove("next--card");
          currentBgImageEl.classList.remove("current--image");
          previousBgImageEl.classList.remove("previous--image");
          nextBgImageEl.classList.remove("next--image");

          currentCardEl.style.zIndex = "50";
          currentBgImageEl.style.zIndex = "-2";

          previousCardEl.style.zIndex = "30";
          nextCardEl.style.zIndex = "20";

          previousBgImageEl.style.zIndex = "-1";

          currentCardEl.classList.add("next--card");
          previousCardEl.classList.add("current--card");
          nextCardEl.classList.add("previous--card");

          currentBgImageEl.classList.add("next--image");
          previousBgImageEl.classList.add("current--image");
          nextBgImageEl.classList.add("previous--image");

          // Update text
          const currentIndex = textData.findIndex(
            (item) => item.name === currentCardEl.dataset.name
          );
          const prevIndex =
            currentIndex === 0 ? textData.length - 1 : currentIndex - 1;
          updateText(prevIndex);
        }

        gsap.to([buttons.prev, buttons.next], {
          duration: 0.2,
          opacity: 1,
          pointerEvents: "all",
        });
      }, 500);
    };

    const updateText = (index) => {
      const currentInfoEl =
        cardInfosContainerEl.querySelector(".current--info");
      const nextInfoEl = cardInfosContainerEl.querySelector(".next--info");
      const prevInfoEl = cardInfosContainerEl.querySelector(".previous--info");

      gsap.to(currentInfoEl.querySelectorAll(".text"), {
        duration: 0.4,
        stagger: 0.1,
        translateY: "-40px",
        opacity: 0,
      });

      setTimeout(() => {
        currentInfoEl.querySelector(".name").textContent = textData[index].name;
        currentInfoEl.querySelector(".location").textContent =
          textData[index].location;
        currentInfoEl.querySelector(".description").textContent =
          textData[index].description;

        gsap.to(currentInfoEl.querySelectorAll(".text"), {
          duration: 0.4,
          stagger: 0.1,
          translateY: "0px",
          opacity: 1,
        });
      }, 400);
    };

    buttons.prev.addEventListener("click", () => swapCards("left"));
    buttons.next.addEventListener("click", () => swapCards("right"));

    waitForImages();

    return () => {
      buttons.prev.removeEventListener("click", () => swapCards("left"));
      buttons.next.removeEventListener("click", () => swapCards("right"));
    };
  }, []);
  return (
    <div className="app">
      <div style={{ position: "absolute", top: "0%" }} id="text1">
        My Projects
      </div>
      <div className="cardList">
        <button className="cardList__btn btn btn--left">
          <div className="icon">
            <svg>
              <use xlinkHref="#arrow-left" />
            </svg>
          </div>
        </button>

        <div className="cards__wrapper">
          <div className="card current--card" data-name="Highlands">
            <div className="card__image">
              <img src={amandarya} alt="" />
            </div>
          </div>

          <div className="card next--card" data-name="Machu Pichu">
            <div className="card__image">
              <img src="https://source.unsplash.com/9dmycbFE7mQ" alt="" />
            </div>
          </div>

          <div className="card previous--card" data-name="Chamonix">
            <div className="card__image">
              <img src="https://source.unsplash.com/m7K4KzL5aQ8" alt="" />
            </div>
          </div>
        </div>

        <button className="cardList__btn btn btn--right">
          <div className="icon">
            <svg>
              <use xlinkHref="#arrow-right" />
            </svg>
          </div>
        </button>
      </div>

      <div className="infoList">
        <div className="info__wrapper">
          <div className="info current--info">
            <h1 className="text name">Music Player</h1>
            <h4 className="text location">Amandarya</h4>
            <p className="text description">
              Web Music Player made using ReactJS
            </p>
          </div>

          <div className="info next--info">
            <h1 className="text name">Machu Pichu</h1>
            <h4 className="text location">Peru</h4>
            <p className="text description">Adventure is never far away</p>
          </div>

          <div className="info previous--info">
            <h1 className="text name">Chamonix</h1>
            <h4 className="text location">France</h4>
            <p className="text description">Let your dreams come true</p>
          </div>
        </div>
      </div>

      <div className="app__bg">
        <div className="app__bg__image current--image">
          <img src={amandarya} alt="" />
        </div>
        <div className="app__bg__image next--image">
          <img src="https://source.unsplash.com/9dmycbFE7mQ" alt="" />
        </div>
        <div className="app__bg__image previous--image">
          <img src="https://source.unsplash.com/m7K4KzL5aQ8" alt="" />
        </div>
      </div>

      <div className="loading__wrapper">
        <div className="loader--text">Loading...</div>
        <div className="loader">
          <span></span>
        </div>
      </div>

      <div style={{ display: "none" }}>
        <svg className="icons">
          <symbol id="arrow-left" viewBox="0 0 512 512">
            <polyline
              points="328 112 184 256 328 400"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "48px",
              }}
            />
          </symbol>
          <symbol id="arrow-right" viewBox="0 0 512 512">
            <polyline
              points="184 112 328 256 184 400"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "48px",
              }}
            />
          </symbol>
        </svg>
      </div>
    </div>
  );
}

export default TextBlock;
