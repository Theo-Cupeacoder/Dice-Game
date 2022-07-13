// Add transition for dice
// Add an indicator for turn
// Add animation for winner
// Add event on new game button 

$(document).ready(() => {
  // Set style before playing
  $('#container').css('display', 'flex').css('justify-content', 'center')
  $('#game').css('display', 'none')
  $('#init').css('display', 'flex')

  $('#play').click(() => {
    // Set style to view the game
    $('#container').css('display', 'block').css('justify-content', 'none')
    $('#game').css('display', 'flex')
    $('#init').css('display', 'none')

    // Declare variables we need to calculate
    let totalCurrent = 0
    let totalPoints = 0
    let player = 1


    // Add event listener on hold button
    $('#hold').click( function () {
      // Calculation of points of current player
      totalPoints += totalCurrent
      oldValueTotalPoints = Number($(`#points-${player}`).text())
      $(`#points-${player}`).text(oldValueTotalPoints + totalPoints)
      // Check if current player win
      if (Number($(`#points-${player}`).text()) >= 100){
        alert(`The winner is Player ${player}`)
      }
      // Reset of values / increment player
      totalPoints = 0
      totalCurrent = 0
      player++
      // Check if player = 3 reset to 1
      if (player === 3){
        player = 1
      }

    })
    // Add event listener on roll dice button
    $('#roll-dice').click(function () {
      // Function for get random number in a range of 0 to 6
      const randomNumber = function () {
        result = Math.round(Math.random() * 6)
        // Retry if result = 0
        while (result === 0) {
          result = Math.round(Math.random() * 6)
        }
        return result
      }
      // Define source to view the dice with his value
      $('#dice').html('<img class="shadow" src="images/Dice-' + randomNumber() + '.png" alt="">')
      // Check if result is different of 1 and calculate current points
      if (result !== 1) {
        totalCurrent += result
        $(`#current-${player}`).text(totalCurrent)
      } else {
        totalCurrent = 0
        $(`#current-${player}`).text(totalCurrent)
        player++
        // Check if player = 3 reset to 1
        if (player === 3){
          player = 1
        }
      }

    })
  })
})