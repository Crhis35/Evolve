import React from 'react';

import { InnerSubTitle, Paragraph } from '../base/base.components';
import { CardItem, Text, Name, List, ListItem } from './services.styles';

const Card = ({ name, history, match, routeName }) => {
  console.log(match);
  console.log(routeName);
  console.log(history);
  return (
    <CardItem>
      <Name>
        <InnerSubTitle inputColor="#212121">{name}</InnerSubTitle>
      </Name>
      <Text>
        <Paragraph>
          Sed ornare, ligula lacinia imperdiet ullamcorper, tellus mauris
          ultrices dui, id cursus odio quam ut nisi. Vestibulum consectetur
          velit non convallis lobortis.
        </Paragraph>
      </Text>
      <List>
        <ul>
          <ListItem>Search Engine Optimisation</ListItem>
          <ListItem>Technical requirements</ListItem>
          <ListItem>Facebook apps</ListItem>
          <ListItem>Backend development</ListItem>
        </ul>
      </List>
    </CardItem>
  );
};

export default Card;
