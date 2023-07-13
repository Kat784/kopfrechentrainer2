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
    } else if (receivedNumber == 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(4000)
        music.playTone(233, music.beat(BeatFraction.Whole))
        music.playTone(208, music.beat(BeatFraction.Whole))
        music.playTone(185, music.beat(BeatFraction.Whole))
        music.playTone(165, music.beat(BeatFraction.Whole))
    } else if (receivedNumber == 20) {
        Sieg()
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showString(Aufgabe)
    basic.showNumber(Antwort)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    radio.sendNumber(Antwort)
    Pause = true
})
function Sieg () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(880, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        # # # # #
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
}
radio.onReceivedString(function (receivedString) {
    basic.turnRgbLedOff()
    basic.clearScreen()
    basic.showString(receivedString)
    Antwort = 0
    basic.pause(200)
    basic.showNumber(Antwort)
    Pause = false
    Aufgabe = receivedString
})
let Antwort = 0
let Aufgabe = ""
let Pause = false
basic.showString("B")
radio.setGroup(1)
Pause = false
Aufgabe = ""
basic.forever(function () {
    if (Pause == false) {
        if (input.isGesture(Gesture.TiltLeft)) {
            Antwort += 1
            basic.showNumber(Antwort)
        } else if (input.isGesture(Gesture.TiltRight)) {
            Antwort += 10
            basic.showNumber(Antwort)
        } else if (input.isGesture(Gesture.ScreenDown)) {
            Antwort += -1
            basic.showNumber(Antwort)
        } else if (input.isGesture(Gesture.Shake)) {
            Antwort = 0
            basic.showNumber(Antwort)
        }
    }
})
