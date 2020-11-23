import {
  onChangeCheckbox,
  onPriceRangeChange,
  onChangeAvailability,
  onClearFilter
} from './filter'
import { onAddToCart } from './products'
import { onRemoveOne, onRemoveAll } from './cart'

export const controller = {
  filter: {
    onChangeCheckbox,
    onPriceRangeChange,
    onChangeAvailability,
    onClearFilter
  },
  products: {
    onAddToCart
  },
  cart: {
    onRemoveOne,
    onRemoveAll
  }
}