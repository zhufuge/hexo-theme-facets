import debounce from 'lodash/debounce'

const colors = [
  '#FFFED0',
  '#FEFEF2',
  '#FEFEC0',
  '#F5857A',
  '#FD9B6C',
  '#FF727A',
  '#FD607F',
  '#FC7794',
  '#FF9A6E',
  '#F97872',
  '#FEF1C4',
  '#FE9099',
  '#FC8370',
  '#F9637C',
  '#FC7281',
  '#F9737C',
  '#FFD3E7',
  '#FDFFFE',
]

const intro = document.querySelector('.intro')
const footer = document.querySelector('footer')

var triCanvas = {}

var width = window.innerWidth
function setTriCanvas(width) {
  const pattern = Trianglify({
    width: width,
    height: 336,
    cell_size: 32,
    variance: 1,
    x_colors: colors,
    y_colors: [1, 2, 3, 2, 6, 8, 0].map(function(v) {return colors[v]}),
  }).canvas().toDataURL()

  triCanvas = pattern

  if (intro) {
    intro.style.background = 'url("' + pattern + '")'
    intro.classList.add('fadeIn')
    setTimeout(function() {
      intro.classList.remove('fadeIn')
    }, 1000)
  }

  if (footer) {
    footer.style.background = 'url("' + pattern + '")'
  }
}
setTriCanvas(width)

window.addEventListener('resize', debounce(function () {
  if (width < window.innerWidth) {
    width = window.innerWidth
    setTriCanvas(width)
  }
}, 150))

export default triCanvas
