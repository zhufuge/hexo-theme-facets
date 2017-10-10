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
    '#FE9099',
    '#FC8370',
    '#F9637C',
    '#FC7281',
    '#F9737C',
    '#FFD3E7',
    '#FDFFFE',
  ]

  const width = window.innerWidth,
        isMobile = width < 992

  const pattern = Trianglify({
    width: width,
    height: isMobile ? 336 : 64,
    cell_size: 32,
    variance: 1,
    x_colors: colors,
    y_colors: (
      isMobile ? [1, 2, 3, 2, 6, 8, 0] : [1, 2, 6, 0]
    ).map(v => colors[v]),
  })

  const container = isMobile
        ? document.getElementsByClassName('about-card')[0]
        : document.body.getElementsByTagName('header')[0]

  container.style.background = `url(${pattern.canvas().toDataURL()})`
})()
