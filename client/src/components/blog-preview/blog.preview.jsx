import React from 'react';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';

import {
  Section,
  InnerTitle,
  SectionContainer,
  BtnWrapper,
  Btn,
} from '../base/base.components';
import { Container, FloatLeft } from './blog.styles';

import './styles.scss';

const BlogPreview = ({
  post: { title, content, published_at, categories },
}) => {
  return (
    <Section>
      <Btn to="/blog">
        <i className="fas fa-arrow-left"></i>
      </Btn>

      <SectionContainer directionFlow="column">
        <Section inputColor="#fff">
          <BtnWrapper className="center-text">
            <InnerTitle inputColor="#212121">{title}</InnerTitle>
          </BtnWrapper>
          <Container>
            <FloatLeft>
              <Moment format="MMM Do YYYY">{published_at}</Moment>
            </FloatLeft>
            <ReactMarkdown className="paragraph" source={content} />
            <Container>
              Categories: <br />
              {categories.map(({ title }, idx) => (
                <p key={idx}>{title}</p>
              ))}
            </Container>
          </Container>
        </Section>
      </SectionContainer>
    </Section>
  );
};

export default BlogPreview;
