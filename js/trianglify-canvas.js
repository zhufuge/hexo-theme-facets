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

const about_card = document.querySelector('.about-card')
const footer = document.querySelector('footer')

var triCanvas = {}

function setTriCanvas() {
  const width = window.innerWidth

  const pattern = Trianglify({
    width: width,
    height: 336,
    cell_size: 32,
    variance: 1,
    x_colors: colors,
    y_colors: [1, 2, 3, 2, 6, 8, 0].map(function(v) {return colors[v]}),
  }).canvas().toDataURL()

  triCanvas = pattern

  if (about_card) {
    about_card.style.background = 'url("' + pattern + '")'
  }

  if (footer) {
    footer.style.background = 'url("' + pattern + '")'
  }
}

setTriCanvas()
window.addEventListener('resize', debounce(setTriCanvas, 150))

export default triCanvas
