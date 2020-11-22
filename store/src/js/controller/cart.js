import { removeOneItemFromCart, removeAllItemFromCart } from '../model'

export const onRemoveOne = index => {
  removeOneItemFromCart(index)
}
export const onRemoveAll = index => {
  removeAllItemFromCart(index)
}