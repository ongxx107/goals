import { SET_COMPLETED } from '../constants';

export default (state = [], action) => {
  switch(action.type) {
    case SET_COMPLETED:
      // extract the completedGoals from action in store Provider
      const { completedGoals } = action;
      return completedGoals;
    default:
      return state;
  }
}
