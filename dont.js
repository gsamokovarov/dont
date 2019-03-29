setInterval(() => {
  const mergeButton = document.querySelector('.merge-message')
  if (mergeButton && mergeButton.parentNode) {
    mergeButton.parentNode.removeChild(element)
  }

  const singleCommentButton = document.querySelector('.review-simple-reply-button')
  if (singleCommentButton && singleCommentButton.parentNode) {
    element.parentNode.removeChild(element)
  }
}, 500 /* ms */)
