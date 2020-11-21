import { createElement, createElementWithId } from './helpers'

export class CartModal {
  constructor(model, controller, props) {
    this.model = model
    this.controller = controller
    this.props = props

    this.onCloseClick = this.onCloseClick.bind(this)
  }

  onCloseClick() {
    if(this.container) {
      document.body.removeChild(this.container)
      this.container = null
    }

    this.props?.onModalClose()
  }

  render() {
    this.container = createElement('div', 'cart-modal')
    const contentDiv = createElement('div', 'cart-content')
    const closeBtn = createElementWithId('div', 'closeCart', 'close')

    closeBtn.textContent = '+'
    closeBtn.onclick = this.onCloseClick

    contentDiv.append(closeBtn)
    this.container.append(contentDiv)

    document.body.append(this.container)

    return this.container
  }
}