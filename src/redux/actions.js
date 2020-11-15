/** actions.js 写动作的 */
import { INCREMENT, DECREMENT } from './action-types'
export const incrementAction = (number) => ({ type: INCREMENT, data: number })
export const decrementAction = (number) => ({ type: DECREMENT, data: number })