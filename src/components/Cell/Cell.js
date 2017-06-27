// @flow
import React from 'react';
import './Cell.css';

type CellProps = {
  main: boolean,
  size: number
};

const Cell = (props: CellProps): React.Element<*> => {
  const {main, size} = props;
  const className = `Cell Cell-${size} ${main ? 'main' : ''}`;
  return (<div className={className}/>);
};

export default Cell;
