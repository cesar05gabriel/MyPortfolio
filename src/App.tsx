import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        zIndex: -1,
      },
      background: {
        color: "#f5f5f5",
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#000000" },
        links: {
          color: "#000000",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 4,
          straight: false,
        },
        number: {
          density: { enable: true, area: 1080 },
          value: 200,
        },
        opacity: {
          value: { min: 0.1, max: 0.5 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 },
          random: { enable: true },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div>
      {init && <Particles id="tsparticles" options={options} />}
      <Navbar />
      <div id="home">
        <Title />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default App;
