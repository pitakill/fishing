// @flow
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as a from 'Actions';
import Grid from 'Components/Grid';
import {moveRandom} from 'Helpers';

type AppProps = {
  actions: {
    getInitialState: Function,
    moveBlue: Function,
    moveToLeft: Function,
    moveToUp: Function,
    moveToRight: Function,
    moveToDown: Function
  },
  blue: number,
  reds: Array<number>,
  main: number,
  size: number,
  yellow: number
};

type AppState = {
  intervalID: number
};

class App extends React.Component<void, AppProps, AppState> {
  state: AppState = {
    intervalID: NaN
  };

  keyDown = (e: SyntheticKeyboardEvent): void => {
    /*
     * 37 - Left
     * 38 - Up
     * 39 - Right
     * 40 - Down
     */
    const {
      actions: {
        moveToLeft,
        moveToUp,
        moveToRight,
        moveToDown
      },
      main,
      size
    } = this.props;
    const {keyCode: kc} = e;
    switch(kc) {
      case 37:
        if (main % size === 1) return;
        return moveToLeft(main - 1);
      case 38:
        if (main <= size) return;
        return moveToUp(main - size)
      case 39:
        if (main % size === 0) return;
        return moveToRight(main + 1);
      case 40:
        if (main > size * (size - 1)) return;
        return moveToDown(main + size);
      default:
        return;
    }
  }

  moveFishes = (): void => {
    const {actions: {moveBlue}} = this.props;
    const intervalID = window.setInterval((): void => {
      moveRandom(this.props.blue, moveBlue);
    }, 300);

    this.setState(Object.assign({}, this.state, {intervalID}));
  }

  componentDidMount(): void {
    window.addEventListener('keydown', this.keyDown);
    this.moveFishes();
  }

  componentWillMount(): void {
    const {actions: {getInitialState}} = this.props;
    getInitialState();
  }

  componentWillUmount(): void {
    window.removeEventListener('keydown', this.keyDown);
  }

  render(): React.Element<*> {
    const {actions, ...props} = this.props;
    return (<Grid {...props}/>);
  }
}

const mapStateToProps = (state: Object): Object => ({
  ...state.getInitialState,
  blue: state.movingAI.blue,
  main: state.movingMain.main
});

const mapDispatchToProps = (dispatch: Function): Object => ({
  actions: bindActionCreators(a, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
