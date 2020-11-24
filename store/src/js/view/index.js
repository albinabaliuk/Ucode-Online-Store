import { NavBar } from './NavBar'
import { SlideMenu } from './SlideMenu'
import { Slider } from './Slider'
import { FilterButton } from './FilterButton'
import { Products } from './Products'
import { Footer } from './Footer'
import { indexOf } from '../utils/array'

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
    this.footer = new Footer(this.model, this.controller, this.render)


    window.onbeforeunload = () => {
      const cart = JSON.stringify(this.model.cart)
      localStorage.setItem('cart', cart)
    }

    window.onload = () => {
      const cartRaw = localStorage.getItem('cart')
      const cart = JSON.parse(cartRaw)

      if(Array.isArray(cart)) {
        this.model.cart = cart

        if(this.model.cart.length) {
          this.model.products.forEach((product, index) => {
            const cartIndex = indexOf(this.model.cart, cartItem => cartItem.item.id === product.id)

            if(isNaN(cartIndex) || cartIndex < 0) return

            const cartItem = this.model.cart[cartIndex]
            this.model.products[index].inStock -= cartItem.quantity
          })
        }
      }

      

      this.render()
    }
  }

  render() {
    const components = []

    components.push(this.navBar.render())
    components.push(this.slideMenu.render())
    components.push(this.slider.render())
    components.push(this.filterButton.render())
    components.push(this.products.render())
    components.push(this.footer.render())

    this.root.innerHTML = ''
    this.root.append(...components)
  }
}