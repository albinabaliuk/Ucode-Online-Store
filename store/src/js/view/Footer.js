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

    this.quickLinks = [
      { link: 'Speakers' },
      { link: 'Headphones' },
      { link: 'Televisions' },
      { link: 'Accessories' },
      { link: 'Stories' },
      { link: 'Gifts' }
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

   const quickLinksWrapper = createElement('div')
   const quickLinksTitle = createElement('h6')
   const quickLinks = createElement('ul', 'footer-links')

   const hr = createElement('hr')

   const copyrightContainer = createElement('div', 'container')
   const copyrightWrapper = createElement('div', 'row')
   const copyrightText = createElement('p', 'copyright-text')
   const copyrightA = createElement('a')





   about.textContent = 'About'
   pText.textContent = "Bang & Olufsen delivers bespoke audio solutions suited to all occasions and needs. Explore and discover how distinctive design and innovative technology can elevate any given experience. CSR & Sustainability is about the way we work to address societal, environmental and climate considerations for the benefit of all our stakeholders. As a global luxury brand in the consumer electronics industry, we recognize that we have a responsibility and an obligation to continue to raise the bar for the industry."
   categoriesTitle.textContent = 'Categories'
   quickLinksTitle.textContent = 'Quick Links'
   copyrightText.textContent = 'Copyright 2020 All Rights Reserved by '
   copyrightA.textContent = 'Bang&Olufsen'
   copyrightA.href = '#'



   textWrapper.append(about)
   textWrapper.append(pText)
   container.append(textWrapper)
   footer.append(container)


   categoriesWrapper.append(categoriesTitle)
   categoriesWrapper.append(footerLinks)
   textWrapper.append(categoriesWrapper)

   quickLinksWrapper.append(quickLinksTitle)
   quickLinksWrapper.append(quickLinks)
   textWrapper.append(quickLinksWrapper)
   container.append(hr)

   copyrightText.append(copyrightA)
   copyrightWrapper.append(copyrightText)
   copyrightContainer.append(copyrightWrapper)
   footer.append(copyrightContainer)




   this.categories.forEach(category => {
    const categoryItem = createElement('li')
    const aItem = createElement('a')

    aItem.textContent = category.category
    aItem.href = "#"
    categoryItem.append(aItem)
    footerLinks.append(categoryItem)
  })

  this.quickLinks.forEach(link => {
    const quickLinksItem = createElement('li')
    const aLinksItem = createElement('a')

    aLinksItem.textContent = link.link
    aLinksItem.href = "#"
    quickLinksItem.append(aLinksItem)
    quickLinks.append(quickLinksItem)
  })



  return footer
}

}