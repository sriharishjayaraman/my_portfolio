import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TextBlock from "./textBlock";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Parallax
        pages={2}
        style={{ top: "0", left: "0", background: "black" }}
        class="animation"
      >
        <ParallaxLayer offset={0} speed={0.25}>
          <div class="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.4}>
          <div class="animation_layer parallax moon" id="moon"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div class="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div class="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <div class="animation_layer parallax" id="grass"></div>
        </ParallaxLayer>
        <ParallaxLayer
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          offset={0}
          speed={0.1}
        >
          <div class="animation_layer parallax" id="text">
            {" "}
            Hello I'm Sri Harish
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.25}>
          <TextBlock />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
