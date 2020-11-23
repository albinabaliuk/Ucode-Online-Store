import { createElement, createElementWithId } from './helpers'


export class Footer {
  constructor(model, controller, reRender) {
    this.model = model
    this.controller = controller
    this.reRender = reRender

    this.categories = [
      { category: 'Speakers' },
      { category: 'Headphones' },
      { category: 'Televisions' },
      { category: 'Accessories' },
      { category: 'Stories' },
      { category: 'Gifts' }
    ]
}


  render() {
   const footer = createElement('footer', 'site-footer')
   const container = createElement('div', 'container')
   const textWrapper = createElement('div', 'row')
   const about = createElement('h6')
   const pText = createElement('p', 'text-justify')

   const categoriesWrapper = createElement('div')
   const categoriesTitle = createElement('h6')
   const footerLinks = createElement('ul', 'footer-links')

   about.textContent = 'About'
   pText.textContent = "Bang & Olufsen delivers bespoke audio solutions suited to all occasions and needs. Explore and discover how distinctive design and innovative technology can elevate any given experience. CSR & Sustainability is about the way we work to address societal, environmental and climate considerations for the benefit of all our stakeholders. As a global luxury brand in the consumer electronics industry, we recognize that we have a responsibility and an obligation to continue to raise the bar for the industry."
   categoriesTitle.textContent = 'Categories'



   textWrapper.append(about)
   textWrapper.append(pText)
   container.append(textWrapper)
   footer.append(container)

   categoriesWrapper.append(categoriesTitle)
   categoriesWrapper.append(footerLinks)





   this.categories.forEach(category => {
    const categoryItem = createElement('a')

    categoryItem.textContent = category.category
    footerLinks.append(categoryItem)
  })


  return footer
}

}