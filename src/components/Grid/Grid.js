// @flow
import React from 'react';
import './Grid.css';
import Cell from 'Components/Cell';

type GridProps = Config;

const Grid = (props: GridProps): React.Element<*> => {
  const {selected, size} = props;
  const cells = [];
  let globalIterator = 1;

  for (let i=0;i<size;i++) {
    for (let j=0;j<size;j++) {
      const main = globalIterator === selected;
      cells.push(
        <Cell
          id={`cell-${globalIterator}`}
          key={`cell-${globalIterator}`}
          main={main}
          size={size}
        />
      );
      globalIterator++;
    }
  }

  return (<div className="Grid">{cells}</div>);
};

export default Grid;
