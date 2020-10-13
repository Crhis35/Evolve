import React, { useEffect } from 'react';

import Project from './project.component';

import {
  BtnWrapper,
  BtnButton,
  Section,
  InnerTitle,
} from '../base/base.components';

import './styles.scss';

const ProjectContainer = ({ posts, fetchMore, ...otherProps }) => {
  useEffect(() => {}, []);
  return (
    <>
      <Section>
        <InnerTitle>Blogs</InnerTitle>
      </Section>
      {posts.map(({ id, title, image }) => {
        const imageUrl =
          process.env.NODE_ENV !== 'development'
            ? image[0].url
            : process.env.REACT_APP_BACKEND_URL + image[0].url;
        return (
          <Project
            key={id}
            title={title}
            id={id}
            image={`${imageUrl}`}
            {...otherProps}
          />
        );
      })}
      <BtnWrapper className="btn-wrapper-fetch">
        <BtnButton
          onClick={() =>
            fetchMore({
              variables: {
                limit: posts.length + 5,
              },
            })
          }
        >
          View More
        </BtnButton>
      </BtnWrapper>
    </>
  );
};
export default ProjectContainer;
