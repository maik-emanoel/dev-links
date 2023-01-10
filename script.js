function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')


  // change profile image
  const img = document.querySelector('#profile img')

  const altProfileImage = 'Foto de perfil de Maik Emanoel com uma camisa cinza e com uma paisagem verde no plano de fundo'
  const altProfileImageLight = 'Foto de perfil de Maik Emanoel com uma camisa preta com cinza segurando um celular e com git adduma paisagem do céu no plano de fundo'

  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', altProfileImageLight)
  } else {
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', altProfileImage)
  }
}