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

  reRender() {
    if(!this.container) return

    const nextContainer = this.renderModal()
    this.container.replaceWith(nextContainer)
    this.saveContainer(nextContainer)
  }

  saveContainer(container) {
    if(!container) return

    this.container = container
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

  renderTotalPrice(parent) {
    const totalPrice = createElement('div', 'cart-total-price')
    const purchaseBtn = createElement('button', 'cart-purchase-btn')


    const total = this.model.cart.reduce((acc, cartItem) => {
      acc += (parseInt(cartItem.item.price) * cartItem.quantity)

      return acc
    }, 0)


    totalPrice.textContent = 'Total all: ' + this.getCurrencySign() + total 
    purchaseBtn.textContent = 'Purchase'

    parent.append(totalPrice)
    parent.append(purchaseBtn)
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
      this.reRender()
    }
  }

  onRemoveAllClick(index) {
    return () => {
      this.controller.cart.onRemoveAll(index)
      this.reRender()
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
      this.renderTotalPrice(parent)
    } else {
      const emptyTitle = createElement('div', 'cart-empty-title')
      emptyTitle.textContent = 'Cart is empty.'

      container.append(emptyTitle)
    }
    
    parent.append(container)
  }

  renderModal() {
    const container = createElement('div', 'cart-modal')
    const contentDiv = createElement('div', 'cart-content')
    
    this.renderCloseBtn(contentDiv)
    this.renderCartItems(contentDiv)


    container.append(contentDiv)

    return container
  }

  render() {
    const container = this.renderModal()
    this.saveContainer(container)
    document.body.append(container)
  }
}