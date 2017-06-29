// @flow
import React from 'react';
import './Grid.css';
import Cell from 'Components/Cell';

type GridProps = Config;

const Grid = (props: GridProps): React.Element<*> => {
  const {blue, reds, main, size, yellow} = props;
  const cells = [];
  let globalIterator = 1;

  for (let i=0;i<size;i++) {
    for (let j=0;j<size;j++) {
      const propsNew: CellConfig = {
        blue: globalIterator === blue,
        id: `cell-${globalIterator}`,
        key: `cell-${globalIterator}`,
        main: globalIterator === main,
        red: reds.includes(globalIterator),
        size,
        yellow: globalIterator === yellow
      };
      cells.push(<Cell {...propsNew}/>);
      globalIterator++;
    }
  }

  return (<div className="Grid">{cells}</div>);
};

export default Grid;
