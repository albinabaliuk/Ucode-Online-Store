import {
  updateFilterType,
  updateFilterPrice,
  updateAvailability,
  clearFiltered,
  applyFilters
} from '../model'

export const onChangeCheckbox = (index) => (e) => {
  const value = e.target.checked

  updateFilterType(index, value)
  applyFilters()
}

export const onPriceRangeChange = (e) => {
  updateFilterPrice(e.target.value)
  applyFilters()
}

export const onChangeAvailability = (index) => (e) => {
  const value = e.target.checked

  updateAvailability(index, value)
}

export const onClearFilter = () => {
  clearFiltered()
}