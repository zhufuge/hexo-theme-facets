import triCanvas from './trianglify-canvas'

const header = document.querySelector('header'),
      container = header.children[0],
      icon = container.querySelector('.menu'),
      menu = container.querySelector('ul')

const headerNode = {
  node: header,
  container: container,
  icon: icon,
  menu: menu,
  state: {
    style: false,
    scroll: window.scrollY,
    menu: false,
  },
  init: function() {
    this.icon.onclick = this.handleIconClick.bind(this)
  },
  onScroll: function(scroll) {
    this.showStyle(scroll > 336 - 56)

    if (Math.abs(scroll - this.state.scroll) > 56) {
      this.animate(scroll > this.state.scroll)
      this.state.scroll = scroll
    }
  },
  showStyle: function(style) {
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
    const ani = ['slideInDown', 'slideOutUp']
    this.node.classList.replace(...(isOutUp ? ani : ani.reverse()))
    if (isOutUp) this.hideMenu()
  },
  handleIconClick: function(event) {
    if (this.state.menu) {
      this.hideMenu()
    } else {
      this.menu.style = 'display: block;'
      this.menu.classList.add('animated')
      this.menu.classList.replace('fadeOut', 'fadeIn')
      event.stopImmediatePropagation()
      window.addEventListener('click', this.hideMenu.bind(this))
      this.state.menu = true
    }
  },
  hideMenu: function() {
    this.menu.classList.replace('fadeIn', 'fadeOut')
    window.removeEventListener('click', this.hideMenu.bind(this))
    this.state.menu = false
  }
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

headerNode.init()
logo.init()

window.addEventListener('scroll', function() {
  headerNode.onScroll(window.scrollY)
})
