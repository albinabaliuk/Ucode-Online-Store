import { onChangeCheckbox, onPriceRangeChange, onChangeAvailability } from './filter'
import { onAddToCart } from './products'
import { onRemoveOne, onRemoveAll } from './cart'

export const controller = {
  filter: {
    onChangeCheckbox,
    onPriceRangeChange,
    onChangeAvailability
  },
  products: {
    onAddToCart
  },
  cart: {
    onRemoveOne,
    onRemoveAll
  }
}