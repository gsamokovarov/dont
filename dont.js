setInterval(() => {
  const mergeButton = document.querySelector('.merge-message')
  if (mergeButton && mergeButton.parentNode) {
    mergeButton.parentNode.removeChild(mergeButton)
  }

  const singleCommentButton = document.querySelector('.review-simple-reply-button')
  if (singleCommentButton && singleCommentButton.parentNode) {
    singleCommentButton.parentNode.removeChild(singleCommentButton)
  }
}, 500 /* ms */)
