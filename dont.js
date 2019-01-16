setInterval(() => {
  const element = document.querySelector('.merge-message')
  if (element && element.parentNode) {
    element.parentNode.removeChild(element)
  }
}, 1000)
