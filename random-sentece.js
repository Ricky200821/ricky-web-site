function randomSentece() {
    const senteces = [
        'ciao mi chiamo riccardo',
        'io sono italiano',
        'ho 13 anni'
    ]
    var max = senteces.length - 1
    var min = 0
    var randomIndex = Math.floor(Math.random()*(max-min+1)+min)
    return senteces[randomIndex]
}

var result = randomSentece()
console.log(result)