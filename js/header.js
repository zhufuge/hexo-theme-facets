import triCanvas from './trianglify-canvas'

const header = document.querySelector('header')
const container = header.querySelector('.container')

const headerNode = {
  node: header,
  container: container,
  state: {
    style: false,
    scroll: window.scrollY,
  },
  onScroll: function(scroll) {
    this.show(scroll > 336 - 56)

    if (Math.abs(scroll - this.state.scroll) > 56) {
      this.animate(scroll > this.state.scroll)
      this.state.scroll = scroll
    }
  },
  show: function(style) {
    if (style === this.state.style) return
    if (style) {
      this.container.classList.add('header-shadow')
      this.container.setAttribute(
        'style',
        'background-image: url(\'' + triCanvas + '\'); ' +
          'background-position: bottom;'
      )
    } else {
      this.container.classList.remove('header-shadow')
      this.container.setAttribute('style', '')
    }
    this.state.style = style
  },
  animate: function(isOutUp) {
    const slide = ['slideInDown', 'slideOutUp']
    this.node.classList.replace(...(isOutUp ? slide : slide.reverse()))
  },
}


const nav = {
  icon: container.querySelector('.menu'),
  menu: container.querySelector('.nav-vertical>ul'),
  status: false,
  init: function() {
    this.icon.onclick = (event) => {
      event.stopImmediatePropagation()
      if (this.status) {
        this.hide()
      } else {
        this.show()
      }
    }
  },
  show: function() {
    this.menu.style = 'display: block;'
    this.menu.classList.replace('fadeOut', 'fadeIn')
    window.addEventListener('click', this.hide.bind(this))
    this.status = true
  },
  hide: function() {
    this.menu.classList.replace('fadeIn', 'fadeOut')
    window.removeEventListener('click', this.hide.bind(this))
    setTimeout(() => { this.menu.style = 'display: none;' }, 750)
    this.status = false
  },
}

const logo = {
  node: container.querySelector('a'),
  init: function() {
    this.node.onmouseover = (function() {
      this.node.classList.remove('zoomSmall')
      this.node.classList.add('zoomBig')
    }).bind(this)
    this.node.onmouseout = (function() {
      this.node.classList.remove('zoomBig')
      this.node.classList.add('zoomSmall')
    }).bind(this)
  },
}

nav.init()
logo.init()

window.addEventListener('scroll', function() {
  headerNode.onScroll(window.scrollY)
  nav.hide()
})
