import { createElement, createElementWithId } from './helpers'
import { FilterModal } from './FilterModal'


export class FilterButton {
  constructor(model, controller, reRender) {
    this.model = model
    this.controller = controller
    this.reRender = reRender

    this.modal = null
    
    this.onButtonClick = this.onButtonClick.bind(this)
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
    
  }


  render() {
    const container = createElementWithId('button', 'button', 'filterButton')
    const icon =  createElement('i', 'fas', 'fa-filter')
    const title =  createElement('span')

    title.textContent = 'Filter'

    container.onclick = this.onButtonClick

    container.append(icon)
    container.append(title)

    return container
  }
}