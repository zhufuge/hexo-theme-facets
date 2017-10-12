const elem = document.querySelector('.back-to-top')

const backNode = {
  node: elem,
  init: function() {
    this.node.style = 'display: none'
    this.node.onclick = this.backToTop
  },
  state: false,
  setShow: function(isShow) {
    if (isShow !== this.state) {
      this.node.style = ''
      if (isShow) {
        this.node.classList.replace('fadeOut', 'fadeIn')
      } else {
        this.node.classList.replace('fadeIn', 'fadeOut')
      }
      this.state = isShow
    }
  },
  backToTop: function() {
    const timer = setInterval(function() {
      window.scrollBy(0, -200)
      if (window.scrollY === 0) {
        clearInterval(timer)
      }
    }, 40)
  },
}

backNode.init()

window.addEventListener('scroll', function() {
  backNode.setShow(window.scrollY > window.innerHeight * 0.75)
})
