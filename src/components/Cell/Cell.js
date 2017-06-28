// @flow
import React from 'react';
import './Cell.css';

type CellProps = CellConfig;

const Cell = (props: CellProps): React.Element<*> => {
  const {
    blue: b,
    main: m,
    red: r,
    size,
    yellow: y
  } = props;
  const blue: string = b ? 'blue': '';
  const main: string = m ? 'main': '';
  const red: string = r ? 'red' : '';
  const yellow: string = y ? 'yellow' : '';
  const className = `Cell Cell-${size} ${blue} ${main} ${red} ${yellow}`;
  return (<div className={className}/>);
};

export default Cell;
