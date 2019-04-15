import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../actions/';
import Hello from '../components/Hello';
import { IStoreState } from '../types/index';

export function mapStateToProps({ interest, name }: IStoreState) {
    return {
      interest,
      name,
    }
  }

  export function mapDispatchToProps(dispatch: Dispatch<actions.InterestAction>) {
    return {
      handleDecrement: () => dispatch(actions.decrementInterest()),
      handleIncrement: () => dispatch(actions.incrementInterest()),
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Hello);