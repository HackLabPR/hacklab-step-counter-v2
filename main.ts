let counterOfSteps = 0
basic.showNumber(counterOfSteps)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1023) {
        counterOfSteps += 1
        basic.showNumber(counterOfSteps)
    }
})
