import * as constant from '../constants/index'

export interface IIncrementInterest {
    type: constant.INCREMENT_INTEREST;
}

export interface IDecrementInterest {
    type: constant.DECREMENT_INTEREST;
}

export type InterestAction = IDecrementInterest | IIncrementInterest;

export const incrementInterest = ():IIncrementInterest => {
    return {
        type: constant.INCREMENT_INTEREST,
    }
}

export const decrementInterest = ():IDecrementInterest => {
    return {
        type: constant.DECREMENT_INTEREST,
    }
}