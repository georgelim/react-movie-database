import { RECEIVE_JOBS } from '../actions'

const jobs = (state=[], action) => {
    switch (action.type) {
      case RECEIVE_JOBS:
        return [...state, ...action.jobs]
      default:
        return state;
    }
  }
  
export default jobs