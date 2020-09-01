input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        max7219_matrix.randomizeAll()
        max7219_matrix.scrollText(
        "rotations activé ",
        75,
        500
        )
        basic.pause(5000)
    }
})
let BLUE = 0
let GREEN = 0
let RED = 0
pins.digitalWritePin(DigitalPin.P0, 1)
pins.digitalWritePin(DigitalPin.P2, 1)
let item = neopixel.create(DigitalPin.P13, 12, NeoPixelMode.RGB)
basic.showIcon(IconNames.Happy)
max7219_matrix.setup(
4,
DigitalPin.P16,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P14
)
max7219_matrix.for_4_in_1_modules(
rotation_direction.clockwise,
false
)
basic.forever(function () {
    RED = 0
    GREEN = 0
    BLUE = 255
    for (let index = 0; index < 255; index++) {
        RED += 1
        BLUE += -1
        item.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        GREEN += 1
        RED += -1
        item.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        BLUE += 1
        GREEN += -1
        item.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        pins.servoWritePin(AnalogPin.P0, 180)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(1000)
    }
})
basic.forever(function () {
    RED = 0
    GREEN = 0
    BLUE = 255
    for (let index = 0; index < 255; index++) {
        RED += 1
        BLUE += -1
        item.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        GREEN += 1
        RED += -1
        item.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        BLUE += 1
        GREEN += -1
        item.showColor(neopixel.rgb(RED, GREEN, BLUE))
        basic.pause(1)
    }
})
