import { NavBar } from './NavBar'
import { SlideMenu } from './SlideMenu'
import { Slider } from './Slider'
import { FilterButton } from './FilterButton'
import { Products } from './Products'

export class App {
  constructor(model, controller) {
    this.model = model
    this.controller = controller

    this.render = this.render.bind(this)

    this.root = document.getElementById('root')
    
    this.navBar = new NavBar(this.model, this.controller, this.render)
    this.slideMenu = new SlideMenu(this.model, this.controller, this.render)
    this.slider = new Slider(this.model, this.controller, this.render)
    this.filterButton = new FilterButton(this.model, this.controller, this.render)
    this.products = new Products(this.model, this.controller, this.render)
  }

  render() {
    const components = []

    components.push(this.navBar.render())
    components.push(this.slideMenu.render())
    components.push(this.slider.render())
    components.push(this.filterButton.render())
    components.push(this.products.render())

    this.root.innerHTML = ''
    this.root.append(...components)
  }
}