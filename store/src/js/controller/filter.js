import { updateFilterType, updateFilterPrice, updateAvailability } from '../model'

export const onChangeCheckbox = (index) => (e) => {
  const value = e.target.checked

  updateFilterType(index, value)
}

export const onPriceRangeChange = (e) => {
  updateFilterPrice(e.target.value)
}

export const onChangeAvailability = (index) => (e) => {
  const value = e.target.checked

  updateAvailability(index, value)
}