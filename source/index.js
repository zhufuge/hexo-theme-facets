(() => {
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
    '#FFFFF8',
    '#FFD3E7',
    '#FDFFFE',
    '#FE9099',
    '#FC8370',
    '#F9637C',
    '#FC7281',
    '#F9737C',
  ]

  const pattern = Trianglify({
    width: window.innerWidth,
    height: 70,
    cell_size: 32,
    variance: 1,
    x_colors: colors,
    y_colors: [1, 2, 6, 0].map(v => colors[v]),
  })

  document.body.getElementsByTagName('header')[0].style.background =
    `url(${pattern.canvas().toDataURL()})`

})()
