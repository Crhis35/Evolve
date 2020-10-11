import React from "react";
import { gql } from "@apollo/client";
import Query from "../../components/Query";

const ALL_BLOGS = gql`
  query posts {
    posts {
      id
    }
  }
`;

const Blog = () => {
  return (
    <Query query={ALL_BLOGS} id={null}>
      {({ data }) => {
        console.log(data);
        return <div>Hi</div>;
      }}
    </Query>
  );
};

export default Blog;
