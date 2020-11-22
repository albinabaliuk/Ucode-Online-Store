import { createElement, createElementWithId } from './helpers'

export class CartModal {
  constructor(model, controller, props) {
    this.model = model
    this.controller = controller
    this.props = props

    this.onCloseClick = this.onCloseClick.bind(this)
    this.onRemoveOneClick = this.onRemoveOneClick.bind(this)
    this.onRemoveAllClick = this.onRemoveAllClick.bind(this)
  }

  onCloseClick() {
    if(this.container) {
      document.body.removeChild(this.container)
      this.container = null
    }

    this.props?.onModalClose()
  }

  getCurrencySign() {
    switch (this.model.currency) {
      case 'euro': {
        return '€'
      }
      case 'dollar': {
        return '$'
      }

      default: {
        return '€'
      }
    }
  }

  renderCloseBtn(parent) {
    const closeBtn = createElementWithId('div', 'closeCart', 'close')

    closeBtn.textContent = '+'
    closeBtn.onclick = this.onCloseClick

    parent.append(closeBtn)
  }

  onRemoveOneClick(index) {
    return () => {
      this.controller.cart.onRemoveOne(index)
    }
  }

  onRemoveAllClick(index) {
    return () => {
      this.controller.cart.onRemoveAll(index)
    }
  }

  renderCartItems(parent) {
    const container = createElement('div', 'cart-items-container')

    if(this.model?.cart?.length) {
      this.model.cart.forEach((cartItem, index) => {
        const cartItemContainer = createElement('div', 'cart-item-container')
        const image = createElement('img', 'cart-item-image')
        const wrapper = createElement('div', 'cart-item-wrapper')
        const title = createElement('div', 'cart-item-title')
        const quantity = createElement('div', 'cart-item-quantity')
        const price = createElement('div', 'cart-item-price')
        const total = createElement('div', 'cart-item-total')

        const removeWrapper = createElement('div', 'cart-item-remove-wrapper')
        const removeOne = createElement('div', 'cart-item-remove-title')
        const removeAll = createElement('div', 'cart-item-remove-title')


        removeOne.onclick = this.onRemoveOneClick(index)
        removeAll.onclick = this.onRemoveAllClick(index)
        removeOne.textContent = 'Remove one'
        removeAll.textContent = 'Remove all'

        image.src = cartItem.item.image
        title.textContent = cartItem.item.title
        quantity.textContent = 'Quantity: ' + cartItem.quantity
        price.textContent = 'Price: ' + this.getCurrencySign() + cartItem.item.price
        total.textContent = 'Total price: ' + this.getCurrencySign() + (parseInt(cartItem.item.price) * cartItem.quantity)

        wrapper.append(title)
        wrapper.append(quantity)
        wrapper.append(price)
        wrapper.append(total)
        removeWrapper.append(removeOne)
        removeWrapper.append(removeAll)
        wrapper.append(removeWrapper)
        cartItemContainer.append(image)
        cartItemContainer.append(wrapper)

        container.append(cartItemContainer)
      })

      //TODO render total cart price and purchase button
    } else {
      const emptyTitle = createElement('div', 'cart-empty-title')
      emptyTitle.textContent = 'Cart is empty.'

      container.append(emptyTitle)
    }
    
    parent.append(container)
  }

  render() {
    this.container = createElement('div', 'cart-modal')
    const contentDiv = createElement('div', 'cart-content')

    this.renderCloseBtn(contentDiv)
    this.renderCartItems(contentDiv)

    this.container.append(contentDiv)

    document.body.append(this.container)

    return this.container
  }
}