function SVEGLIATI()  {
    basic.showIcon(IconNames.Happy)
}
function ADDORMENTATI()  {
    for (let i = 0; i < 4; i++) {
        basic.showLeds(`
            # # # # #
            . . . # .
            . . # . .
            . # . . .
            # # # # #
            `)
        LAMPEGGIA()
    }
}
function BEVI()  {
    for (let index = 0; index <= 4; index++) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
    }
    SVEGLIATI()
}
input.onButtonPressed(Button.A, () => {
    ADDORMENTATI()
})
input.onButtonPressed(Button.B, () => {
    BEVI()
})
input.onButtonPressed(Button.AB, () => {
    ESERCITATI()
})
input.onGesture(Gesture.Shake, () => {
    Pattina()
})
function ESERCITATI()  {
    basic.showIcon(IconNames.Rollerskate)
}
function Pattina()  {
    basic.showIcon(IconNames.Rollerskate)
}
function LAMPEGGIA()  {
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
}
SVEGLIATI()
