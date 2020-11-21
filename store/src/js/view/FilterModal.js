import { createElement, createElementWithId } from './helpers'

export class FilterModal {
  constructor(model, controller, props) {
    this.model = model
    this.controller = controller
    this.props = props

    this.rangeValueElement = null

    this.onCloseClick = this.onCloseClick.bind(this)
    this.onRangeChange = this.onRangeChange.bind(this)
  }

  onCloseClick() {
    if(this.container) {
      document.body.removeChild(this.container)
      this.container = null
    }

    this.props?.onModalClose()
  }

  renderClose(parent) {
    const closeBtn = createElementWithId('div', 'close', 'close')

    closeBtn.textContent = '+'
    closeBtn.onclick = this.onCloseClick

    parent.append(closeBtn)
  }


  renderTitle(parent) {
    const title = createElement('div', 'filterTitle')

    title.textContent = 'Filter B&O Products by:'
    parent.append(title)
  }


  renderCheckboxes(parent) {
    const checkboxes = createElement('div', 'filterByType')

    this.model.filters.types.forEach((filterItem, index) => {
      const container = createElement('label', 'elem')
      const checkbox = createElement('input')
      const title = createElement('span', 'checkmark')

      checkbox.type = 'checkbox'
      checkbox.checked = filterItem.value
      container.textContent = filterItem.title

      checkbox.onchange = this.controller?.filter?.onChangeCheckbox(index)

      container.append(checkbox)
      container.append(title)

      checkboxes.append(container)
    })

    parent.append(checkboxes)
  }

  onRangeChange(e) {
    if(this.rangeValueElement) {
      this.rangeValueElement.textContent = e.target.value
    }
  }

  renderRangeInput(parent) {
    const container = createElement('div', 'priceTitle')
    const input = createElement('input', 'range')
    this.rangeValueElement = createElementWithId('span', 'rangeValue')

    this.rangeValueElement.textContent = this.model.filters?.price?.value

    input.type = 'range'
    input.min = this.model.filters?.price?.min
    input.max = this.model.filters?.price?.max
    input.value = this.model.filters?.price?.value
    
    input.onmousemove = this.onRangeChange
    input.onchange = this.controller?.filter?.onPriceRangeChange

    container.append(this.rangeValueElement)
    container.append(input)

    parent.append(container)
  }

  renderRadioInputs(parent) {
    const container = createElement('div', 'availability')
    const title = createElement('div', 'availabilityTitle')

    title.textContent = 'Availability:'
    container.append(title)

    this.model.filters?.availability?.forEach((item, index) => {
      const label = createElement('label', 'radioContainer')
      const input = createElement('input')
      const span = createElement('span', 'checkmarkRadio')

      label.textContent = item.title
      input.type = 'radio'
      input.name = 'radio'
      input.checked = item.value
      input.onchange = this.controller?.filter?.onChangeAvailability(index)

      label.append(input)
      label.append(span)
      container.append(label)
    })

    parent.append(container)
  }

  render() {
    this.container = createElement('div', 'bg-modal')
    const contentDiv = createElement('div', 'modal-content')
  
    this.renderClose(contentDiv)
    this.renderTitle(contentDiv)
    this.renderCheckboxes(contentDiv)
    this.renderRangeInput(contentDiv)
    this.renderRadioInputs(contentDiv)

    this.container.append(contentDiv)

    document.body.append(this.container)

    return this.container
  }
}