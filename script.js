$(document).ready(() => {
  $('#container').css('display', 'flex').css('justify-content', 'center')
  $('#game').css('display', 'none')
  $('#init').css('display', 'flex')
  $('#play').click(() => {
    $('#container').css('display', 'block').css('justify-content', 'none')
    $('#game').css('display', 'flex')
    $('#init').css('display', 'none')
  })
})