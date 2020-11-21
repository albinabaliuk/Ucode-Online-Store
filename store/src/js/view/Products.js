import { createElement, createElementWithId } from './helpers'


export class Products {
  constructor(model, controller, reRender) {
    this.model = model
    this.controller = controller
    this.reRender = reRender
  }

  paginateProducts() {
    this.itemsPerPage = 6
    this.pagesCount = Math.ceil(this.model?.products?.length / this.itemsPerPage) || 1
    this.activePageIndex = 0
  }

  getCurrentPage() {
    return this.model.products.slice(this.activePageIndex * this.itemsPerPage, (this.activePageIndex + 1) * this.itemsPerPage)
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

  renderTitle(parent) {
    const container = createElement('div', 'section-model')
    const title = createElement('h2')

    title.textContent = 'View all B&O products'
    container.append(title)

    parent.append(container)
  }

  renderProducts(parent) {
    const productsContainer = createElement('div', 'products-center')

    const products = this.getCurrentPage()
    products.forEach((product, index) => {
      const container = createElement('article', 'product')
      const imgContainer = createElement('div', 'img-container')
      const productImage = createElement('img', 'product-img')
      const bagBtn = createElement('div', 'bag-btn')
      const cartIcon = createElement('i', 'fas', 'fa-shopping-cart')

      productImage.src = product.image
      productImage.alt = 'product'

      bagBtn.append(cartIcon)
      imgContainer.append(productImage)
      imgContainer.append(bagBtn)
      container.append(imgContainer)

      const title = createElement('h3')
      const description = createElement('h4')
      const price = createElement('h5')
      const available = createElement('h6')

      title.textContent = product.title
      description.textContent = product.description
      price.textContent = this.getCurrencySign() + product.price
      available.textContent = `Available: ${product.inStock}`
      
      container.append(title)
      container.append(description)
      container.append(price)
      container.append(available)

      productsContainer.append(container)
    })

    parent.append(productsContainer)
  }

  render() {
    this.paginateProducts()
    const container = createElement('section', 'products')

    this.renderTitle(container)
    this.renderProducts(container)

    return container
  }
}