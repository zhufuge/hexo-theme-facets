import debounce from 'lodash/debounce'

const elem = document.querySelector('.back-to-top')

const backNode = {
  node: elem,
  state: {
    animate: false,
  },
  style: {
    display: false,
    right: 32,
  },
  init: function() {
    this.node.onclick = this.backToTop
    this.setRight(window.innerWidth)
    this.animate(window.scrollY > window.innerHeight * 0.75)
    this.render()
  },
  animate: function(isShow) {
    if (isShow !== this.state.animate) {
      if (!this.style.display) {
        this.style.display = true
        this.render()
      }
      if (isShow) {
        this.node.classList.replace('fadeOut', 'fadeIn')
      } else {
        this.node.classList.replace('fadeIn', 'fadeOut')
      }
      this.state.animate = isShow
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
  setRight: function(width) {
    this.style.right = width > 868
      ? width / 2 - 386 - 48
      : 32
    this.render()
  },
  render: function() {
    this.node.style = this.style.display
      ? 'right:' + this.style.right + 'px;'
      : 'display: none'
  }
}

backNode.init()

window.addEventListener('scroll', function() {
  backNode.animate(window.scrollY > window.innerHeight * 0.75)
})

window.addEventListener('resize', debounce(function() {
  backNode.setRight(window.innerWidth)
}, 40))
