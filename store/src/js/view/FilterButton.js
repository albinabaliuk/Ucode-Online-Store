import { createElement, createElementWithId } from './helpers'
import { FilterModal } from './FilterModal'


export class FilterButton {
  constructor(model, controller, reRender) {
    this.model = model
    this.controller = controller
    this.reRender = reRender

    this.modal = null
    
    this.onButtonClick = this.onButtonClick.bind(this)
    this.onClearClick = this.onClearClick.bind(this)
    this.onModalClose = this.onModalClose.bind(this)

    this.filterModal = new FilterModal(
      this.model,
      this.controller,
      { onModalClose: this.onModalClose }
    )
  }

  onButtonClick() {
    this.modal = this.filterModal.render()
  }

  onModalClose() {
    this.reRender()
  }
  
  onClearClick() {
    this.controller.filter.onClearFilter()
    this.reRender()
  }


  render() {
    const container = createElement('div', 'filter-row')
    const filterButton = createElementWithId('button', 'button', 'filterButton')
    const iconFilter =  createElement('i', 'fas', 'fa-filter')
    const titleTiler =  createElement('span')

    const clearFilterButton = createElementWithId('button', 'button', 'filterButton')
    const iconClear =  createElement('i', 'fas', 'fa-filter')
    const titleClear =  createElement('span')

    titleTiler.textContent = 'Filter'

    filterButton.onclick = this.onButtonClick

    filterButton.append(iconFilter)
    filterButton.append(titleTiler)

    titleClear.textContent = 'Clear'

    clearFilterButton.onclick = this.onClearClick

    clearFilterButton.append(iconClear)
    clearFilterButton.append(titleClear)

    container.append(filterButton)
    container.append(clearFilterButton)

    return container
  }
}