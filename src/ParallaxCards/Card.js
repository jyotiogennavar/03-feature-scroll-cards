import React from "react";
import styled from "styled-components";
import { useTransform, useScroll, motion} from 'framer-motion';
import { useRef } from 'react';

const Card = ({ title, description, artist, src, color, i, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']

  })
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])
  return (
    <CardContainer ref={container}>
      <CardContent
        style={{
          backgroundColor: color, 
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <CardBody>
          <h2>{title}</h2>
          <h4>{artist}</h4>
          <p>{description}</p>
        </CardBody>

        <ImgContainer>
          <Inner style={{scale: imageScale}}>
            <img src={src} alt={title} />
          </Inner>
        </ImgContainer>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0px;
`;

const CardContent = styled.div`
  display: flex;
  gap: 2rem;
  position: relative;
  height: 550px;
  width: 1000px;
  border-radius: 25px;
  padding: 50px;
  transform-origin: top;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-top: 50px;
  max-width: 60ch;

  h2 {
    font-family:"Rosarivo", cursive;
    font-size: 2.8rem;
  }

  h4 {
    font-family: "Noto Sans", sans-serif;
    font-size: 1rem;
    margin-top: .5rem;
  }
  p {
    font-family: "Noto Sans", sans-serif;
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  span {
    display: flex;
    align-items: center;
    gap: 5px;

    a {
      font-size: 12px;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const ImgContainer = styled.div`
  width: 40%;
  height: 100%;
  border-radius: 25px;
  overflow: hidden;
`;

const Inner = styled(motion.div)`
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
  }
`;

export default Card;
