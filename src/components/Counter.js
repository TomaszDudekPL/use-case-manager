/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../state/counterActions';

const Protected = (props) => {

  const { counter, onDecrement, onIncrement } = props;

  return (
    <section id="protected">
      <div>
        <div>{counter}</div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {

  return { counter: state.counterReducer.counter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(counterActions.increment()),
    onDecrement: () => dispatch(counterActions.decrement())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Protected);
