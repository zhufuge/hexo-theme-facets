import triCanvas from './trianglify-canvas'

const header = document.querySelector('header')

const headerNode = {
  node: header,
  container: header.children[0],
  isShowStyle: false,
  setShowStyleState: function(state) {
    if (state !== this.isShowStyle) {
      if (state) {
        this.container.classList.add('header-shadow')
      } else {
        this.container.classList.remove('header-shadow')
      }

      this.container.setAttribute(
        'style',
        state
          ? 'background-image: url(\'' + triCanvas + '\'); ' +
          'background-position: bottom;'
          : ''
      )
    }
    this.isShowStyle = state
  },
  scroll: window.scrollY,
  setScroll: function(scroll) {
    this.setShowStyleState(scroll > 336 - 56)

    if (scroll > 336) {
      this.node.classList.add('animated')
    } else {
      this.node.classList.remove('animated')
    }

    if (Math.abs(scroll - this.scroll) > 56) {
      this.setSlide(scroll > this.scroll)
      this.scroll = scroll
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

window.onscroll = function() {
  headerNode.setScroll(window.scrollY)
}
