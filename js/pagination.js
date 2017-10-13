const non_uses = document.querySelectorAll('a.non-use')

non_uses.forEach(function(elem) {
  elem.addEventListener('click', function(e) {
    e.preventDefault()
  })
})

