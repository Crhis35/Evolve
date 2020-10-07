import React, { useEffect, useState, useRef } from 'react';

import useTypewriter from 'react-typewriter-hook';
import {
  SectionContainer,
  ContentContainer,
  Title,
  Paragraph,
} from './landing.styles';

const Titles = [
  'Evolve, is the future.',
  'Evolve, is Evolution',
  'Evolve, is It',
];
let index = 0;

const Landing = () => {
  const [title, setTitle] = useState('Evolve');
  const intervalRef = useRef({});
  const name = useTypewriter(title);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // index = index + 1 > 2 ? 0 : ++index + 1;
      index = index > 2 ? 0 : ++index;
      setTitle(Titles[index]);
    }, 5000);
    return function clear() {
      clearInterval(intervalRef.current);
    };
  }, [title]);
  return (
    <SectionContainer>
      <ContentContainer>
        <Title>{name}</Title>
        <Paragraph>Laborum sint sint eiusmod eiusmod veniam ut.</Paragraph>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Landing;
