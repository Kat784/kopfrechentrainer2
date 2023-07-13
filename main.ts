enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Pause = true
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.setLedColor(0x00ff00)
    } else if (receivedNumber == 2) {
        Pause = true
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.setLedColor(0xff0000)
    } else if (receivedNumber == 3) {
        Pause = true
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.setLedColor(0xffff00)
    } else if (receivedNumber == 10) {
        Pause = true
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.setLedColor(0xff0000)
        basic.pause(4000)
        music.playTone(233, music.beat(BeatFraction.Whole))
        music.playTone(208, music.beat(BeatFraction.Whole))
        music.playTone(185, music.beat(BeatFraction.Whole))
        music.playTone(165, music.beat(BeatFraction.Whole))
    } else if (receivedNumber == 20) {
        Pause = true
        Sieg()
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    radio.sendNumber(Antwort)
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
})
let Antwort = 0
let Pause = false
basic.showString("B")
radio.setGroup(1)
Pause = false
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
