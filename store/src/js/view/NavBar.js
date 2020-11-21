import { createElement, createElementWithId } from './helpers'
import { CartModal } from './CartModal'


export class NavBar {
  constructor(model, controller, reRender) {
    this.model = model
    this.controller = controller
    this.reRender = reRender

    this.title = 'Bang & Olufsen'
    this.modal = null
    
    this.onCartClick = this.onCartClick.bind(this)
    this.onModalClose = this.onModalClose.bind(this)

    this.cartModal = new CartModal(
      this.model,
      this.controller,
      { onModalClose: this.onModalClose }
    )
  }

  onCartClick() {
    this.modal = this.cartModal.render()
  }

  onModalClose() {
    
  }


  render() {
    const container = createElement('div', 'nav__container')
    const nav = createElement('nav')
    const title = createElement('h1', 'mainTitle')
    const btnContainer = createElementWithId('div', 'cart-btn', 'cart-btn')
    const iSpan = createElement('span', 'nav-icon')
    const icon = createElement('i', 'fas', 'fa-shopping-cart')
    const badge = createElement('div', 'cart-items')

    title.textContent = this.title
    badge.textContent = this.model?.cart?.length || 0

    btnContainer.onclick = this.onCartClick

    iSpan.append(icon)
    btnContainer.append(iSpan)
    btnContainer.append(badge)
    nav.append(title)
    nav.append(btnContainer)
    container.append(nav)

    return container
  }
}