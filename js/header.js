import triCanvas from './trianglify-canvas'

const header = document.querySelector('header'),
      container = header.children[0]

const headerNode = {
  node: header,
  container: container,
  state: {
    style: false,
    scroll: window.scrollY,
  },
  init: function() {
  },
  onScroll: function(scroll) {
    this.showStyle(scroll > 336 - 56)

    if (scroll > 336 && Math.abs(scroll - this.state.scroll) > 56) {
      this.runAnimate(scroll > this.state.scroll)
      this.state.scroll = scroll
    }
  },
  showStyle: function(style) {
    if (style !== this.state.style) {
      if (style) {
        this.container.classList.add('header-shadow')
      } else {
        this.container.classList.remove('header-shadow')
      }
      this.canvas(style)
    }
    this.state.style = style
  },
  canvas: function(canvas) {
    this.container.setAttribute(
      'style',
      canvas
        ? 'background-image: url(\'' + triCanvas + '\'); ' +
        'background-position: bottom;'
        : ''
    )
  },
  runAnimate: function(isOutUp) {
    this.node.classList.add('slideInDown', 'slideOutUp')
    if (isOutUp) {
      this.node.classList.replace('slideInDown', 'slideOutUp')
    } else {
      this.node.classList.replace('slideOutUp', 'slideInDown')
    }
  }
}

headerNode.init()

window.addEventListener('scroll', function() {
  headerNode.onScroll(window.scrollY)
})
