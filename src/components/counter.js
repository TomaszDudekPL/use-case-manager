import React from 'react'
import {connect} from 'react-redux'
import * as counterActions from '../State/counterActions'

class Protected extends React.Component {


    render() {

        const {counter, onDecrement, onIncrement} = this.props;

        return <section id="protected">
            <div>
                <div>{counter}</div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        </section>

    }

}

const mapStateToProps = (state) => {
    console.log(state);
  return {counter: state.counterReducer.counter}
};
const mapDispatchToProps = (dispatch) => {
  return{
      onIncrement: () => dispatch(counterActions.increment()),
      onDecrement: () => dispatch(counterActions.decrement())
  }
};

Protected = connect(mapStateToProps, mapDispatchToProps)(Protected);


export default Protected
