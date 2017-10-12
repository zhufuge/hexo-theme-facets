import triCanvas from './trianglify-canvas'

const header = document.querySelector('header')

const headerNode = {
  node: header,
  container: header.children[0],
  state: {
    isShowStyle: false,
    scroll: window.scrollY,
  },
  init: function() {
    if (this.container.classList.contains('header-shadow')) {
      this.setCanvas(true)
    }
  },
  setShowStyleState: function(state) {
    if (state !== this.state.isShowStyle) {
      if (state) {
        this.container.classList.add('header-shadow')
      } else {
        this.container.classList.remove('header-shadow')
      }
      this.setCanvas(state)
    }
    this.state.isShowStyle = state
  },
  setCanvas: function(isShow) {
    this.container.setAttribute(
      'style',
      isShow
        ? 'background-image: url(\'' + triCanvas + '\'); ' +
        'background-position: bottom;'
        : ''
    )
  },
  setScroll: function(scroll) {
    this.setShowStyleState(scroll > 336 - 56)

    if (scroll > 336) {
      this.node.classList.add('animated')
    } else {
      this.node.classList.remove('animated')
    }

    if (Math.abs(scroll - this.state.scroll) > 56) {
      this.setSlide(scroll > this.state.scroll)
      this.state.scroll = scroll
    }
  },
  setSlide: function(isOutUp) {
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
  headerNode.setScroll(window.scrollY)
})
