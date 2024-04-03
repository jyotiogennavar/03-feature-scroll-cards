import React, { useEffect } from "react";
import styled from "styled-components";
import { projects } from "./data";
import Card from "./Card";
import Lenis from "@studio-freight/lenis";

import { useScroll } from "framer-motion";
import { useRef } from "react";

const Index = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <Main ref={container}>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.5;
        return (
          <Card
            key={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </Main>
  );
};

const Main = styled.main`
  margin-top: 25vh;
  margin-bottom: 50vh;
`;

export default Index;
