const imgs = document.getElementsByClassName('picture')
const container = document.querySelector('.photo-imager-container')
const imgContainer = document.querySelector('.image-container img')


for (const img of imgs) {
  img.onclick = () => {
    container.style = ''
    imgContainer.src = img.src
  }
}


document.querySelector('#painting .icon-x').onclick = () => {
  container.style = 'display:none'
}
