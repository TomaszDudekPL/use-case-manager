import React from 'react'
import {connect} from 'react-redux'


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

export const mapStateToProps = (state) => {
    console.log(state);
  return {counter: state.counterReducer.counter}
};
export const mapDispatchToProps = (dispatch) => {
  return{
      onIncrement: () => dispatch({ type: 'INCREMENT'}),
      onDecrement: () => dispatch({ type: 'DECREMENT'})
  }
};

Protected = connect(mapStateToProps, mapDispatchToProps)(Protected);


export default Protected
