import '../css/style.scss'
import { App } from './view'
import { model } from './model'
import { controller } from './controller'

const app = new App(model, controller)















const applyListeners = () => {
  document.getElementById('close').addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = 'none';
  })
  
  document.getElementById('button').addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = 'flex';
  })
  
  
  // document.getElementById('closeCart').addEventListener('click', () => {
  //   document.querySelector('.cart-modal').style.display = 'none';
  // })
    
  // document.getElementById('cart-btn').addEventListener('click', () => {
  //   document.querySelector('.cart-modal').style.display = 'flex';
  // })
  
  // document.getElementById("slide-menu-btn").addEventListener("click", function (e) {
  //   e.preventDefault();
  //   if (this.classList.contains('is-active')) {
  //       this.classList.remove("is-active");
  //       document.querySelector('#menu').classList.remove('nav-active');
  //       document.body.classList.remove('body-active');
  
  //   }
  //   else {
  //       this.classList.add("is-active");
  //       document.querySelector('#menu').classList.add('nav-active');
  //       document.body.classList.add('body-active');
  //   }
  // })

  
  const filterTypes = document.getElementById('filterTypes')

  for(let i = 0; i < filterTypes.children.length; i++) {
    const filterType = filterTypes.children[i]

    filterType.children[0].onchange = e => {
      const checked = e.target.checked
      const value = e.target.parentElement.textContent.trim()

      const index = indexOf(model.filters.types, item => item.title === value)

      if(index <= -1) return

      model.filters.types[index].value = checked
    }
  }
}


// //Slider logic
// const showSlides = (n) => {
//   let i;
//   let slides = document.getElementsByClassName("slider__content");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1
//   }
//   if (n < 1) {
//     slideIndex = slides.length
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }

// let slideIndex = 1;
// // showSlides(slideIndex);

// // Next/previous controls
// const plusSlides = (n) => {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// const currentSlide = (n) => {
//   showSlides(slideIndex = n);
// }


//Price Slider
// const rangeSlider = (value) => {
//   document.getElementById("rangeValue").innerHTML = value;
// }


//Components
class Products {
  constructor() {
    this.title = 'View all B&O products'
  }

  getCurrencySign() {
    switch (model.currency) {
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

  render() {
    const productItems = model.products.map(product => {
      return /*html*/ `
      <article class="product">
        <div class="img-container">
          <img
            src="${product.image}"
            alt="product"
            class="product-img"
          />
          <div class="bag-btn">
            <i class="fas fa-shopping-cart"></i>
          </div>

        </div>
        <h3>${product.title}</h3>
        <h4>${product.description}</h4>
        <h5>${this.getCurrencySign()}${product.price}</h5>
        <h6>Available: ${product.inStock}</h6>
        
      </article>
      `
    })

    return /*html*/ `
    <section class="products">
      <div class="section-model">
        <h2>${this.title}</h2>
      </div>
      <div class="products-center">
        ${productItems.join('')}
      </div>
    </section>
    `
  }
}

// class Filter {
//   constructor() {

//   }

//   render() {
//     return /*html*/ `
//     <section class="filter">

//     </section>
//     `
//   }
// }

// class filterButton {
//   constructor() {

//   }

//   render() {
//     return /*html*/ `
//     <button id="button" class="filterButton">
//         <i class="fas fa-filter"></i>
//         Filter
//     </button>
//     `
//   }
// }


// class PriceSlider {
//   constructor() {}

//   render() {
//     return /*html*/ `
  
//     `
//   }
// }


// class SlideMenu {
//   constructor() {}

//   render() {
//     return /*html*/ `
//     <div id="menu">
//       <button id="slide-menu-btn" class="hamburger hamburger-line">
//         <span></span>
//       </button>

//       <div class="sections">
//         <div class="sectionElement">Main</div>
//         <div class="sectionElement">Products</div>
//         <div class="sectionElement">Shops</div>
//         <div class="sectionElement">Contact Us</div>
//         <div class="sectionElement">Help</div>
//       </div>
//     </div>
//     `
//   }
// }


// class Slider {
//   constructor() {

//   }

//   render() {
//     const slidesItems = []
//     const dots = []

//     model.slides.forEach((slide, i) => {
//       slidesItems.push( /*html*/ `
//       <div class="slider__content fade">
//         <a href="#"><img src="${slide.img}" alt="" /></a>
//       </div>
//       `)

//       dots.push( /*html*/ `
//       <span class="dot" onclick="currentSlide(${i + 1})"></span>
//       `)
//     })

//     return /*html*/ `
//     <div class="slider__container">
//       <button class="prev" onclick="plusSlides(-1)"></button>
//       <div class="slider__track">
//         ${slidesItems.join('')}
//       </div>
//       <button class="next" onclick="plusSlides(1)"></button>
//     </div>

//     <div style="slider__dots">
//       ${dots.join('')}
//     </div>
//     `
//   }
// }

// class NavBar {
//   constructor() {
//     this.title = 'Bang & Olufsen'
//   }

//   render() {
//     return /*html*/ `
//     <div class="nav__container">
//       <nav>
//         <h1 class="mainTitle">${this.title}</h1>
//         <div id="cart-btn" class="cart-btn">
//           <span class="nav-icon">
//             <i class="fas fa-shopping-cart"></i>
//           </span>
//           <div class="cart-items">${model.cart.length}</div>
//         </div>
//       </nav>
//     </div>
//     `
//   }
// }


// class FilterModal {
//   constructor() {}

//   render() {
//     const typesCheckboxes = model.filters.types.map(t => {
//       return /*html*/`
//       <label class="elem">${t.title}
//         <input type="checkbox" ${t.value ? 'checked' : ''}>
//         <span class="checkmark"></span>
//       </label>
//       `
//     })


//     return /*html*/`
//     <div class="bg-modal">
//       <div class="modal-content">
//         <div id="close" class="close">+</div>

//         <div class="filterTitle">Filter B&O Products by:</div>

        
//         <div id="filterTypes" class="filterByType">
//           ${typesCheckboxes.join('')}
//         </div>



//         <div class="priceTitle">Budget:
//           <span id="rangeValue">0</span>
//           <input class="range" type="range" name="" value="0" min="0" max="750" onmousemove="rangeSlider(this.value)"
//             onChange="rangeSlider(this.value)">
//         </div>

//         <div class="availability">
//           <div class="availabilityTitle">Availability:</div>
//           <label class="radioContainer">Low
//             <input type="radio" checked="checked" name="radio">
//             <span class="checkmarkRadio"></span>
//           </label>
//           <label class="radioContainer">Normal
//             <input type="radio" name="radio">
//             <span class="checkmarkRadio"></span>
//           </label>
//           <label class="radioContainer">Many
//             <input type="radio" name="radio">
//             <span class="checkmarkRadio"></span>
//           </label>
//         </div>

//       </div>
//     </div>
//     `
//   }
// }


// class CardModal {
//   constructor() {}

//   render() {
//     return /*html*/ `
//     <div class="cart-modal">
//       <div class="cart-content">
//         <div id="closeCart" class="close">+</div>


//       </div>
//     </div>
//     `
//   }
// }


class Footer {
  constructor() {}

  render() {
    return /*html*/ `
    <footer class="site-footer">
      <div class="container">
        <div class="row">
            <h6>About</h6>
            <p class="text-justify">Bang & Olufsen delivers bespoke audio solutions suited to all occasions and needs. 
              Explore and discover how distinctive design and innovative technology can elevate any given experience.
              CSR & Sustainability is about the way we work to address societal, environmental and climate considerations
              for the benefit of all our stakeholders. As a global luxury brand in the consumer electronics industry, 
              we recognize that we have a responsibility and an obligation to continue to raise the bar for the industry. </p>

          <div>
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="#">Speakers</a></li>
              <li><a href="#">Headphones</a></li>
              <li><a href="#">Televisions</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Gifts</a></li>
            </ul>
          </div>

          <div>
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#/">Contact Us</a></li>
              <li><a href="#">Contribute</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr>
      </div>
      <div class="container">
        <div class="row">
            <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by
              <a href="#">Bang&Olufsen</a>.
            </p>
          

          <div class="footerLinks">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fab fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fab fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    `
  }
}


// class App {
//   constructor() {
//     this.isCartOpen = false

//     this.filterButton = new filterButton()
//     this.products = new Products()
//     this.filter = new Filter()
//     this.navBar = new NavBar()
//     this.slider = new Slider()
//     this.priceSlider = new PriceSlider()
//     this.slideMenu = new SlideMenu()
//     this.footer = new Footer()
//     this.filterModal = new FilterModal()
//     this.cardModal = new CardModal()

//   }

//   render() {
//     return /*html*/ `
//     ${this.navBar.render()}
//     ${this.slider.render()}
//     ${this.filterButton.render()}
//     ${this.priceSlider.render()}
//     ${this.products.render()}
//     ${this.slideMenu.render()}

//     ${this.footer.render()}

//     ${this.filterModal.render()}
//     ${this.cardModal.render()}
//     `
//   }
// }

//Core section
// class DOM {
//   static render(root, app) {
//     root.innerHTML = app
//   }
// }

// const app = new App()

// DOM.render(document.getElementById('root'), app.render())
// showSlides()
// applyListeners()