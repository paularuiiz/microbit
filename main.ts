input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    if (input.lightLevel() > 100) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() < 8) {
        basic.showArrow(ArrowNames.South)
    }
    while (input.temperature() > 30) {
        basic.showArrow(ArrowNames.North)
    }
})
