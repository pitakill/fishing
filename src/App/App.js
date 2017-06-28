// @flow
import React from 'react';
import Grid from 'Components/Grid';

type AppProps = Config;
type AppState = {
  selected: number
};

class App extends React.Component<void, AppProps, AppState> {
  state: AppState;
  state = {
    selected: this.props.selected
  };

  keyDown = (e: SyntheticKeyboardEvent): void => {
    /*
     * 37 - Left
     * 38 - Up
     * 39 - Right
     * 40 - Down
     */
    const {keyCode: kc} = e;
    const {size} = this.props;
    const {selected: selectedState} = this.state;
    let selected;
    switch(kc) {
      case 37:
        if (selectedState % size === 1) return;
        selected = selectedState - 1;
        this.setState(Object.assign({}, this.state, {selected}));
        break;
      case 38:
        if (selectedState <= size) return;
        selected = selectedState - size;
        this.setState(Object.assign({}, this.state, {selected}));
        break;
      case 39:
        if (selectedState % 11 === 0) return;
        selected = selectedState + 1;
        this.setState(Object.assign({}, this.state, {selected}));
        break;
      case 40:
        if (selectedState > size * (size - 1)) return;
        selected = selectedState + size;
        this.setState(Object.assign({}, this.state, {selected}));
        break;
      default:
        return;
    }
  }

  componentDidMount(): void {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUmount(): void {
    window.removeEventListener('keydown', this.keyDown);
  }

  render(): React.Element<*> {
    const {selected} = this.state;
    const props: AppProps = Object.assign({}, this.props, {selected});
    return (<Grid {...props}/>);
  }
}

export default App;
