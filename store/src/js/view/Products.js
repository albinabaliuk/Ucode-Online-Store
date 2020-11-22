import { createElement, createElementWithId } from './helpers'


export class Products {
  constructor(model, controller, reRender) {
    this.model = model
    this.controller = controller
    this.reRender = reRender

    this.activePageIndex = 0
    this.itemsPerPage = 6

    this.onPageClick = this.onPageClick.bind(this)
    this.onBagClick = this.onBagClick.bind(this)
  }

  paginateProducts() {
    this.pagesCount = Math.ceil(this.model?.products?.length / this.itemsPerPage) || 1
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

  onBagClick(item) {
    return (e) => {
      this.controller.products.onAddToCart(item)
      this.reRender()
    }
  }

  renderProducts(parent) {
    const productsContainer = createElement('div', 'products-center')

    const products = this.getCurrentPage()
    products.forEach((product) => {
      const container = createElement('article', 'product')
      const imgContainer = createElement('div', 'img-container')
      const productImage = createElement('img', 'product-img')
      const bagBtn = createElement('div', 'bag-btn')
      const cartIcon = createElement('i', 'fas', 'fa-shopping-cart')

      productImage.src = product.image
      productImage.alt = 'product'

      bagBtn.onclick = this.onBagClick(product)

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

  onPageClick(index) {
    return () => {
      this.activePageIndex = index
      this.reRender()
    }
  }

  renderProductPages(parent) {
    const container = createElement('div', 'product-pages')
    const activePage = this.activePageIndex + 1
  
    for(let i = 1; i <= this.pagesCount; i++) {
      const productPage = createElement('div', 'product-page')
      productPage.textContent = i

      if(activePage === i) {
        productPage.classList.add('product-page-active')
      }

      productPage.onclick = this.onPageClick(i - 1)

      container.append(productPage)
    }

    parent.append(container)
  }

  render() {
    this.paginateProducts()
    const container = createElement('section', 'products')

    this.renderTitle(container)
    this.renderProducts(container)
    this.renderProductPages(container)

    return container
  }
}