var computerMove, playerMove, randomNumber;
playerMove = 'papier'
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
    computerMove = 'kamien';
} else if (randomNumber == '2') {
    computerMove = 'papier';
} else if (randomNumber == '3') {
    computerMove = 'nozyce';
}
printMessage('Moj ruch: ' + computerMove);