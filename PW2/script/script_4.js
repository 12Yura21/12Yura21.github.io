var userBetInput = document.getElementById('userBet');
var playButton = document.getElementById('playButton');

playButton.addEventListener('click', () => {
    var userBet = parseFloat(userBetInput.value);
    if (!isNaN(userBet) && userBet>=0 ) {
        var randomResult = Math.floor(Math.random() * 11) - 5;
        if (randomResult <= 0) {
            message = "Ви не вгадали із вашою ставкою:" + userBet + "грн. Випало число:" + randomResult;
        } else {
            var winnings = userBet * randomResult;
            message = "Ви виграли" + winnings + "грн! Випало число:" + randomResult;
        }
        setTimeout(() => {
            alert(message);
        }, 1000);
    } else {
        alert('Будь ласка, введіть коректну суму ставки.');
    }
  });