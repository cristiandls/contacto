import React from 'react';
import { Icon } from 'semantic-ui-react';

const NoMatch = () => {
  return (
    <div>
      <Icon name="minus circle" size="huge" color="red" />
      <strong>Página no encontrada!</strong>
    </div>
  );
};

export default NoMatch;
