import { INCREMENT, DECREMENT } from '../src/actions'

const intialState = { value: 0 }

export default (state = initialState, action) => {
  switch (action, type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    default:
      return state
  }
}