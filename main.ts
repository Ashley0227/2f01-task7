let x = 0
input.onButtonPressed(Button.A, function () {
    x = input.lightLevel()
    basic.showNumber(x)
    if (x < 50) {
        x = 255
    }
    if (x < 50) {
        x = 128
    }
    if (x < 50) {
        x = 64
    }
    if (x < 50) {
        x = 0
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
	
})
