enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.setLedColor(0x00ff00)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.setLedColor(0xff0000)
    } else if (receivedNumber == 3) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.setLedColor(0xffff00)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    radio.sendNumber(Antwort)
})
radio.onReceivedString(function (receivedString) {
    basic.turnRgbLedOff()
    basic.clearScreen()
    basic.showString(receivedString)
    Antwort = 0
    basic.pause(200)
    basic.showNumber(Antwort)
})
let Antwort = 0
basic.showString("B")
radio.setGroup(1)
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        Antwort += 1
        basic.showNumber(Antwort)
    } else if (input.isGesture(Gesture.TiltRight)) {
        Antwort += 10
        basic.showNumber(Antwort)
    } else if (input.isGesture(Gesture.ScreenDown)) {
        Antwort = 0
        basic.showNumber(Antwort)
    }
})
