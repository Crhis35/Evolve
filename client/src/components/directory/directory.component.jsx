import React from 'react';

import { gql } from '@apollo/client';

import { DirectoryContainer } from './directory.style';

import Landing from '../landing/landing.component';

import './directory.style.scss';
import Query from '../Query';

const GET_VIDEO = gql`
  query homePage {
    homePage {
      Directory {
        video_landing {
          url
        }
      }
    }
  }
`;

const Directory = () => {
  return (
    <DirectoryContainer>
      <Query query={GET_VIDEO}>
        {({
          data: {
            homePage: {
              Directory: {
                video_landing: { url },
              },
            },
          },
        }) => (
          <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
              <source src={url} type="video/mp4" />
            </video>
          </div>
        )}
      </Query>
      <Landing />
    </DirectoryContainer>
  );
};

export default Directory;
