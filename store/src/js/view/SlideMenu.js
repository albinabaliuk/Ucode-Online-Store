import { createElement, createElementWithId } from './helpers'

export class SlideMenu {
  constructor(model, controller, reRender) {
    this.model = model
    this.controller = controller
    this.reRender = reRender

    this.sections = [
      { title: 'Main' },
      { title: 'Products' },
      { title: 'Shops' },
      { title: 'Contact Us' },
      { title: 'Help' }
    ]

    this.onHamburgerClick = this.onHamburgerClick.bind(this)
  }

  onHamburgerClick(e) {
    e.preventDefault()
    e.stopPropagation()

    if (e.target.classList.contains('is-active')) {
      e.target.classList.remove("is-active")
        document.querySelector('#menu').classList.remove('nav-active')
        document.body.classList.remove('body-active')
  
    }
    else {
      e.target.classList.add("is-active")
        document.querySelector('#menu').classList.add('nav-active')
        document.body.classList.add('body-active')
    }
  }
   
  render() {
    const menuSlider = createElementWithId('div', 'menu')
    const hamburger = createElementWithId('button', 'slide-menu-btn', 'hamburger', 'hamburger-line')
    const menuSpan = createElement('span')

    hamburger.onclick = this.onHamburgerClick


    const sectionsContainer = createElement('div', 'sections')
    this.sections.forEach(section => {
      const sectionItem = createElement('div', 'sectionElement')

      sectionItem.textContent = section.title
      sectionsContainer.append(sectionItem)
    })
    
    hamburger.append(menuSpan)
    menuSlider.append(hamburger)
    menuSlider.append(sectionsContainer)

    return menuSlider
  }
}