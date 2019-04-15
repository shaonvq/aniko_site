import {InterestAction} from '../actions';
import {DECREMENT_INTEREST, INCREMENT_INTEREST} from '../constants/index';
import {IStoreState} from '../types/index';

export function interest(state: IStoreState,action: InterestAction):IStoreState {
    switch(action.type){
        case INCREMENT_INTEREST:
            return {...state, interest: state.interest + 1};
        case DECREMENT_INTEREST:
            return {...state, interest: state.interest - 1};
    }
    return state;
}