import React from 'react';

import Project from './project.component';

import {
  BtnWrapper,
  BtnButton,
  Section,
  InnerTitle,
} from '../base/base.components';

import './styles.scss';

const ProjectContainer = ({ posts, fetchMore }) => {
  return (
    <>
      <Section>
        <InnerTitle>Blogs</InnerTitle>
      </Section>
      {posts.map(({ id, title, uid, image }) => {
        const imageUrl = image[0].url;
        return (
          <Project
            key={id}
            title={title}
            uid={uid}
            image={`${process.env.REACT_APP_BACKEND_URL}${imageUrl}`}
          />
        );
      })}
      <BtnWrapper className="btn-wrapper-fetch">
        <BtnButton
          onClick={() =>
            fetchMore({
              variables: {
                start: posts.length,
                limit: 5,
              },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return { posts: [...prev.posts, ...fetchMoreResult.posts] };
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
