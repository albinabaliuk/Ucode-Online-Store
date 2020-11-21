export const createElement = (tag, ...classNames) => {
  const element = document.createElement(tag)

  classNames.forEach(className => {
    element.classList.add(className)
  })

  return element
}

export const createElementWithId = (tag, id, ...classNames) => {
  const element = document.createElement(tag)
  element.id = id

  classNames.forEach(className => {
    element.classList.add(className)
  })

  return element
}