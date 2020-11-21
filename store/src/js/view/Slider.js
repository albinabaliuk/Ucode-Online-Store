import { createElement, createElementWithId } from './helpers'
import sliderImage1 from '../../assets/images/Slider/b-o-hero-1920x1080.jpg'
import sliderImage2 from '../../assets/images/Slider/b-o-beoplay-h9-2_large.jpg'
import sliderImage3 from '../../assets/images/Slider/H9i_grey_mist-2.jpg'
import sliderImage4 from '../../assets/images/Slider/du82zvpwr9f51.jpg'
import sliderImage5 from '../../assets/images/Slider/bang_and_olufsen_beoplay_h9_02.jpg'
import sliderImage6 from '../../assets/images/Slider/bild-bundo.jpg'
import sliderImage7 from '../../assets/images/Slider/b-o_07-1920x1080.jpg'

export class Slider {
  constructor(model, controller, reRender) {
    this.model = model
    this.controller = controller
    this.reRender = reRender

    this.slides = [
      { img: sliderImage1 },
      { img: sliderImage2 },
      { img: sliderImage3 },
      { img: sliderImage4 },
      { img: sliderImage5 },
      { img: sliderImage6 },
      { img: sliderImage7 }
    ]
    this.slidesElements = []
    this.dotsElements = []
    this.interval = null
    this.activeSlideIndex = 0


    this.onPrevClick = this.onPrevClick.bind(this)
    this.onNextClick = this.onNextClick.bind(this)
    this.startInterval = this.startInterval.bind(this)
    this.onDotClick = this.onDotClick.bind(this)


    this.startInterval()
  }

  onPrevClick() {
    if(this.activeSlideIndex === 0) {
      this.activeSlideIndex = (this.slides.length - 1)
    } else {
      this.activeSlideIndex -= 1
    }

    this.reRender()
    this.startInterval()
  }

  onNextClick() {
    if(this.activeSlideIndex === (this.slides.length - 1)) {
      this.activeSlideIndex = 0
    } else {
      this.activeSlideIndex += 1
    }

    this.reRender()
    this.startInterval()
  }

  startInterval() {
    if(this.interval) {
      clearInterval(this.interval)
    }

    this.interval = setInterval(this.onNextClick, 5000)
  }

  onDotClick(index) {
    return () => {
      this.activeSlideIndex = index
      this.reRender()
      this.startInterval()
    }
  }
   
  render() {
    const container = createElement('div')
    const sliderContainer = createElement('div', 'slider__container')
    const prevBtn = createElement('button', 'prev')
    const nextBtn = createElement('button', 'next')
    const sliderTrack = createElement('div', 'slider__track')
    const dotsContainer = createElement('div', 'slider__dots')

    prevBtn.onclick = this.onPrevClick
    nextBtn.onclick = this.onNextClick

    this.slides.forEach((slide, index) => {
      const slideContainer = createElement('div', 'slider__content','fade')
      const image = createElement('img')
      const dot = createElement('span', 'dot')

      if(this.activeSlideIndex === index) {
        slideContainer.classList.add('slider__content_active')
        dot.classList.add('active')
      }

      dot.onclick = this.onDotClick(index)

      image.src = slide.img

      slideContainer.append(image)

      sliderTrack.append(slideContainer)
      dotsContainer.append(dot)

      this.slidesElements.push(slideContainer)
      this.dotsElements.push(dot)
    })

    sliderContainer.append(prevBtn)
    sliderContainer.append(sliderTrack)
    sliderContainer.append(nextBtn)

    container.append(sliderContainer)
    container.append(dotsContainer)

    return container
  }
}