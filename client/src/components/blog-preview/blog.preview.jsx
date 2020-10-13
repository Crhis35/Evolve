import React from 'react';

import { Section, InnerTitle } from '../base/base.components';

const BlogPreview = ({ post: { title } }) => {
  return (
    <Section>
      <InnerTitle>{title}</InnerTitle>
    </Section>
  );
};

export default BlogPreview;
